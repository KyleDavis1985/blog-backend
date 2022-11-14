const { PostComment } = require('../models')

const GetPostComments = async (req, res) => {
  try {
    const posts = await PostComment.findAll()
    res.send(posts)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const GetPostComment = async (req, res) => {
  try {
    const post = await PostComment.findOne({
      where: {
        id: req.params.post_id
      }
    })
    res.send(post)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetPostComments,
  GetPostComment
}
