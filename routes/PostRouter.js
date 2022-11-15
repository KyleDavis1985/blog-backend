const router = require('express').Router()
const controller = require('../controllers/PostController')
const middleware = require('../middleware')

router.get('/', controller.GetPosts)
router.get('/:post_id', controller.GetPost)
router.post('/create', controller.CreatePost)
router.put('/:post_id', controller.UpdatePost)
router.delete('/:post_id', controller.DeletePost)

module.exports = router
