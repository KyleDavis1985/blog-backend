const Router = require('express').Router()
const PostRouter = require('./PostRouter')
const UserRouter = require('./UserRouter')
Router.use('/post', PostRouter)
Router.use('/user', UserRouter)
module.exports = Router
