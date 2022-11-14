'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          firstName: 'Erwin',
          lastName: 'Ortiz',
          email: 'eo99@mail.com',
          passwordDigest: 'sacramento',
          location: 'FL',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Kyle',
          lastName: 'Davis',
          email: 'kd45@mail.com',
          passwordDigest: 'power',
          location: 'CO',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Roberto',
          lastName: 'Rodriguez',
          email: 'rd13@mail.com',
          passwordDigest: 'jabroni',
          location: 'IL',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Edward',
          lastName: 'Yuabov',
          email: 'ey65@mail.com',
          passwordDigest: 'qwerty',
          location: 'NY',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
  }
}
