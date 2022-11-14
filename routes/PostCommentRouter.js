const router = require('express').Router()
const controller = require('../controllers/PostCommentController')
const middleware = require('../middleware')

router.get('/', controller.GetPostComments)
router.get('/:post_id', controller.GetPostComment)

module.exports = router
