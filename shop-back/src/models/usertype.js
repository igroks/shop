'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static get COLLABORATOR(){
      return 'collaborator';
    }

    static get CLIENT(){
      return 'client';
    }

    static associate(models) {
      this.hasMany(models.User);
    }
  };
  UserType.init({
    label: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UserType',
  });
  return UserType;
};