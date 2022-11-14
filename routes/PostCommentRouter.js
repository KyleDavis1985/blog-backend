const router = require('express').Router()
const controller = require('../controllers/PostCommentController')
const middleware = require('../middleware')

router.get('/', controller.GetPostWithComments)
router.get('/:post_id', controller.GetCommentWithPost)
router.get('/comments', controller.GetPostComment)

module.exports = router
