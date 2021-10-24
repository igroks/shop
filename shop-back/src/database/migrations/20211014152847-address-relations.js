'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('Addresses', {
      fields: ['userId'],
      type: 'foreign key',
      name: 'userAddressFk',
      references: {
        table: 'Users',
        field: 'id'
      },
      onDelete: 'restrict',
      onUpdate: 'restrict'
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint(
      'Addresses',
      'userAddressFk'
    );
  }
};
