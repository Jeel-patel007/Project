'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class owner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      owner.belongsToMany(models.garage, {
        through: models.owner_has_garages
      });
    }
  }
  owner.init({
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'owner',

  });
  return owner;
};