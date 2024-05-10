'use strict';
import { DataTypes, Model } from 'sequelize';
// const sequelize = new Sequelize('sqlite::memory:');
import { sequelize } from '../config/connection.js';
class User extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    User.hasMany(models.project)
  }
}
User.init({
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  email: DataTypes.STRING
}, {
  sequelize,
  modelName: 'User',
});

// User.hasMany(project);
// User.associate(Model);
export default User;