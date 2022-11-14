const { User } = require('../models')

const GetUsers = async (req, res) => {
  try {
    const users = await User.findAll()
    res.send(users)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const GetUser = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.user_id
      }
    })
    res.send(user)
  } catch (error) {
    throw error
  }
}

const CreateUser = async (req, res) => {
  try {
    const user = await User.create({ ...req.body })
    res.send(user)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const UpdateUser = async (req, res) => {
  try {
    const user = await User.update(
      { ...req.body },
      { where: { id: req.params.user_id }, returning: true }
    )
    res.send(user)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const DeleteUser = async (req, res) => {
  try {
    await User.destroy({ where: { id: req.params.user_id } })
    res.send({ msg: 'User Deleted', payload: req.params.user_id, status: 'Ok' })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  GetUsers,
  GetUser,
  CreateUser,
  UpdateUser,
  DeleteUser
}
