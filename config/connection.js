import { Sequelize } from 'sequelize';
import { config } from 'dotenv';
config()
export const sequelize = new Sequelize(
  process.env.database,
  process.env.username,
  process.env.password,
  {
    host: process.env.host,
    dialect: 'mysql'
  }
);

sequelize.authenticate().then(() => {
  console.log('connection has established');
}).catch((error) => {
  console.log('unable to connect database', error);
});

