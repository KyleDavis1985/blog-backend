const router = require('express').Router()
const controller = require('../controllers/CommentController')
const middleware = require('../middleware')

router.get('/', controller.GetComments)
router.get('/:comment_id', controller.GetComment)
router.post('/create', controller.CreateComment)
router.put('/:comment_id', controller.UpdateComment)
router.delete('/:comment_id', controller.DeleteComment)

module.exports = router
