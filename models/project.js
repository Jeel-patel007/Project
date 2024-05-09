'use strict';
import { DataTypes, Model } from 'sequelize';
// const sequelize = new Sequelize('sqlite::memory:');
import { sequelize } from '../config/connection.js';
import User from './user.js';

class project extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  // static associate(models) {
  //   project.belongsTo(models.user, {
  //     as: 'created-by-user',
  //     foreignKey: 'id'
  //   })
  // }
}

project.init({
  name: DataTypes.STRING,
  description: DataTypes.STRING,
  user_id: DataTypes.INTEGER
}, {
  sequelize,
  modelName: 'project',
});


export default project;