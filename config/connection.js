import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  'project_advance',
  'root',
  'root_123',
  {
    host: '127.0.0.1',
    dialect: 'mysql'
  }
);

sequelize.authenticate().then(() => {
  console.log('connection has established');
}).catch((error) => {
  console.log('unable to connect database', error);
});

