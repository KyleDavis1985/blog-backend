const { PostComment } = require('../models')

const GetPostsComments = async (req, res) => {
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

const CreatePostComment = async (req, res) => {
  try {
    const post = await PostComment.create({ ...req.body })
    res.send(post)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const UpdatePostComment = async (req, res) => {
  try {
    const post = await PostComment.update(
      { ...req.body },
      { where: { id: req.params.post_id }, returning: true }
    )
    res.send(post)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const DeletePostComment = async (req, res) => {
  try {
    await PostComment.destroy({ where: { id: req.params.post_id } })
    res.send({
      msg: 'PostComment Deleted',
      payload: req.params.post_id,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetPostsComments,
  GetPostComment,
  CreatePostComment,
  UpdatePostComment,
  DeletePostComment
}
