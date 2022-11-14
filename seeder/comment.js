'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'posts',
      [
        {
          comment: 'tasteless food',
          userId: 1,
          postId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Weight Watchers',
          userId: 2,
          postId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Leaning Diet',
          userId: 3,
          postId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Beefcake Diet',
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
    return queryInterface.bulkDelete('posts', null, {})
  }
}
