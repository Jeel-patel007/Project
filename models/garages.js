'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class garages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      console.log(models);
      garages.belongsToMany(models.owner, {
        through: models.owner_has_garages
      });
    }
  }
  garages.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'garages',
  });
  return garages;
};