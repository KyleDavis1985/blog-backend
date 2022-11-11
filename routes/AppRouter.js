const Router = require('express').Router()
const PostRouter = require('./PostRouter')
const UserRouter = require('./UserRouter')
const AuthRouter = require('./AuthRouter')
Router.use('/post', PostRouter)
Router.use('/user', UserRouter)
Router.use('/auth', AuthRouter)
module.exports = Router
