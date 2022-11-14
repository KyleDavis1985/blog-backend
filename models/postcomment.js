'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class PostComment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      PostComment.belongsTo(models.Post, { foreignKey: 'postId' })
      PostComment.belongsTo(models.Comment, { foreignKey: 'commentId' })
    }
  }
  PostComment.init(
    {
      postId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'posts',
          key: 'id'
        }
      },
      commentId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'comments',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'PostComment',
      tableName: 'posts_comments'
    }
  )
  return PostComment
}
