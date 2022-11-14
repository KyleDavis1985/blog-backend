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
          password: 'sacramento',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Kyle',
          lastName: 'Davis',
          email: 'kd45@mail.com',
          password: 'power',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Roberto',
          lastName: 'Rodriguez',
          email: 'rd13@mail.com',
          password: 'jabroni',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Edward',
          lastName: 'Yuabov',
          email: 'ey65@mail.com',
          password: 'qwerty',
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
