'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'comments',
      [
        {
          comment: 'tasteless food',
          userId: 1,
          postId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          comment: 'this calorie deficit is a real killer',
          userId: 2,
          postId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          comment: 'also cut on sodium to avoid water retention',
          userId: 3,
          postId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          comment: 'EAT EVERYTHING!!!?? Hell yea!!!',
          userId: 4,
          postId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('comments', null, {})
  }
}
