'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User);
    }
  };
  Address.init({
    userId: DataTypes.INTEGER,
    street: DataTypes.STRING,
    number: DataTypes.INTEGER,
    neighborhood: DataTypes.STRING,
    city: DataTypes.STRING,
    uf: DataTypes.STRING,
    cep: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Address',
  });
  return Address;
};