const {ExtractJwt, Strategy} = require( 'passport-jwt' )
const passport = require( 'passport' )
require( 'dotenv' ).config()

const {findUserById} = require( '../users/users.controllers' )

const passportConfigs = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken,
    secretOrKey: process.env.API_KEY
}

passport.use( new Strategy( passportConfigs, (tokenDecoded, done) =>{
    findUserById(tokenDecoded.id)
        .then( data => data ? 
            done( null, tokenDecoded ) //? El usuario si existe y es valido
            :
            done( null, false ) //? El usuario no existe
        )
        .catch( err => done( err, false ) ) //? Error en la base de datos
}))

module.exports = passport