'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class owner_has_garages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // console.log(models);
      // console.log(models.garage_table);
      // owner_has_garages.hasMany(models.garage_table, {
      //   foreignKey: 'garage_id'
      // });
      // owner_has_garages.hasMany(models.owner_table, {
      //   foreignKey: 'owner_id'
      // });
    }
  }
  owner_has_garages.init({
    garageId: DataTypes.INTEGER,
    ownerId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'owner_has_garages',
  });
  return owner_has_garages;
};