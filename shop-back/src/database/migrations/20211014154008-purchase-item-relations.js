'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('PurchaseItems', {
      fields: ['purchaseId'],
      type: 'foreign key',
      name: 'purchaseFk',
      references: {
        table: 'Purchases',
        field: 'id'
      },
      onDelete: 'restrict',
      onUpdate: 'restrict'
    })
    await queryInterface.addConstraint('PurchaseItems', {
      fields: ['productId'],
      type: 'foreign key',
      name: 'productFk',
      references: {
        table: 'Products',
        field: 'id'
      },
      onDelete: 'restrict',
      onUpdate: 'restrict'
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint(
      'PurchaseItems',
      'purchaseFk'
    );
    await queryInterface.removeConstraint(
      'PurchaseItems',
      'productFk'
    );
  }
};
