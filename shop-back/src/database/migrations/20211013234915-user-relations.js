'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('Users', {
      fields: ['userTypeId'],
      type: 'foreign key',
      name: 'userTypeFk',
      references: {
        table: 'UserTypes',
        field: 'id'
      },
      onDelete: 'restrict',
      onUpdate: 'restrict'
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint(
      'Users',
      'userTypeFk'
    );
  }
};
