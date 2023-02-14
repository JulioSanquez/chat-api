const apiV1Router = require( 'express').Router()
const usersRouter = require( '../users/users.router' )

apiV1Router.use( '/users', usersRouter )

module.exports = apiV1Router