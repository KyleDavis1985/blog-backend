'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Post.belongsTo(models.User, { foreignKey: 'userId' })
      Post.belongsToMany(models.Comment, {
        as: 'postcomment',
        through: models.PostComment,
        foreignKey: 'postId'
      })
      Post.hasMany(models.Comment, {
        as: 'associated_comments',
        foreignKey: 'postId'
      })
    }
  }
  Post.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      privacy: {
        type: DataTypes.BOOLEAN
      },
      image: DataTypes.TEXT,
      userId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Post',
      tableName: 'posts'
    }
  )
  return Post
}
