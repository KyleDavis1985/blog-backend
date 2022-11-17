const { Post } = require('../models')

const GetPosts = async (req, res) => {
  try {
    const posts = await Post.findAll()
    res.send(posts)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const GetPost = async (req, res) => {
  try {
    const post = await Post.findOne({
      where: {
        id: req.params.post_id
      }
    })
    res.send(post)
  } catch (error) {
    throw error
  }
}

const CreatePost = async (req, res) => {
  try {
    const post = await Post.create(req.body)
    res.send(post)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const UpdatePost = async (req, res) => {
  try {
    const post = await Post.update(
      { ...req.body },
      { where: { id: req.params.post_id }, returning: true }
    )
    res.send(post)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const DeletePost = async (req, res) => {
  try {
    await Post.destroy({ where: { id: req.params.post_id } })
    res.send({ msg: 'Post Deleted', payload: req.params.post_id, status: 'Ok' })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetPosts,
  CreatePost,
  UpdatePost,
  DeletePost,
  GetPost
}
