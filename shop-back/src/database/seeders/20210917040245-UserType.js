'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('UserTypes', [
      {
        id: 1,
        label: 'collaborator',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        label: 'client',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('UserTypes', null, {});
  }
};
