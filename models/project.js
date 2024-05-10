'use strict';
import { DataTypes, Model } from 'sequelize';
// const sequelize = new Sequelize('sqlite::memory:');
import { sequelize } from '../config/connection.js';

class project extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate = (models) => {
    project.belongsTo(models.User, {
      foreignKey: 'userId'
    })
  }
}

project.init({
  name: DataTypes.STRING,
  description: DataTypes.STRING,
  userId: DataTypes.INTEGER
}, {
  sequelize,
  modelName: 'project',
});



export default project;