const {findUserByEmail} = require( '../users/users.controllers' ) 
const {comparePassword} = require( '../utils/crypto' )

//? son funciones asicronas
//? retornan informacion

const checkUserCredentials = async ( email, password ) => {
    try {
        const user = await findUserByEmail(email)
        const verifyPassword = comparePassword( password, user.password )

        return verifyPassword ? user : false
    } catch (err) {
        return false
    }
}

module.exports = checkUserCredentials