import { sequelize } from "../config/connection.js";
import DataTypes from 'sequelize';

export const book = sequelize.define("books", {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false
  },
  release_date: {
    type: DataTypes.DATEONLY,
  },
  subject: {
    type: DataTypes.STRING
  }
})

sequelize.sync().then(() => {
  console.log('Book table created successfully!');
}).catch((error) => {
  console.error('Unable to create table : ', error);
});