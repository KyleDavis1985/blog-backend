const Router = require('express').Router()
const PostRouter = require('./PostRouter')
Router.use('/post', PostRouter)
module.exports = Router
