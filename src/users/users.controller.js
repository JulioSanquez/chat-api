const {Users} = require( '../models/index.models' )
const uuid = require( 'uuid' ).v4
const {hashPassword} = require( '../utils/crypto' )

const findAllUsers = async (  ) => {
    const data = await Users.findAll()
    return data
}

const findUserById = async ( id ) => {
    const data = await Users.findOne({
        where:{
            id
        }
    })
    return data
}

const createUser = async ( userObj ) => {
    const newUser = {
        id: uuid(),
        firstName : userObj.firstName,
        lastName : userObj.lastName,
        email: userObj.email,
        password: hashPassword(userObj.password),
        profileImage: userObj.profileImage,
        phone : userObj.phone
    }
    const data = await Users.create(newUser)
    return data
}

const updateUser =  async ( id, userObj ) => {
    //? Data === [0] || [1]
    const data = await Users.update( userObj, {
        where:{
            id
        }
    } )
    return data[0] 
}

const deleteUser = async ( id ) => {
    const data  = await Users.destroy( id )
    return data
}

module.exports = {
    findAllUsers,
    findUserById,
    createUser,
    updateUser,
    deleteUser
}