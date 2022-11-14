'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'posts',
      [
        {
          title: 'Keto',
          body: '0 Carbs Net',
          image:
            'https://static01.nyt.com/images/2021/09/30/fashion/29melting-face-emoji/29melting-face-emoji-mediumSquareAt3X-v2.jpg',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Weight Watchers',
          body: 'jenny craig got nothing on this',
          image:
            'https://play-lh.googleusercontent.com/Q8klPWjtLQrBeeP2oDAtA0H0CrYZBpK8ckF3HnqDMT2L6GGdsUCjYc75mfRkoQyhrwfS',
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Leaning Diet',
          body: 'Stop with the sugars',
          image:
            'https://images-na.ssl-images-amazon.com/images/I/81GhJuX-uRL.png',
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Beefcake Diet',
          body: 'Eat everything u see!!!!!',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb48lHOXPMzUL6R4gvpoov1PGgOIGslk5V-iZZLapIWQrfLU8FAeKS1MQLNOcJyXDWgvA&usqp=CAU',
          userId: 4,
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
