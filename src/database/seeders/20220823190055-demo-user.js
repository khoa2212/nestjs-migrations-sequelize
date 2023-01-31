/* eslint-disable @typescript-eslint/no-unused-vars */
'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'John',
        lastName: 'Doe',
        isActive: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        firstName: 'Janet',
        lastName: 'Doe',
        isActive: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
