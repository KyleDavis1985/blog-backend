const { PostComment } = require('../models')
const { Comment } = require('../models')
const { Post } = require('../models')

const GetPostWithComments = async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [{ model: Comment, as: 'associated_comments' }]
    })
    res.send(posts)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const GetCommentWithPost = async (req, res) => {
  try {
    const comment = await Comment.findAll({
      include: [{ model: Post, as: 'associated_post' }]
    })
    res.send(comment)
  } catch (error) {
    throw error
  }
}

const GetPostComment = async (req, res) => {
  try {
    const list = await Post.findAll({
      include: [
        {
          model: Comment,
          as: 'postcomment',
          through: { attributes: [] }
        }
      ]
    })
    res.send(list)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetPostWithComments,
  GetCommentWithPost,
  GetPostComment
}
