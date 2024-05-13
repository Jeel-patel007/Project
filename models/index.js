import { sequelize } from "../config/connection.js";
import { DataTypes, Sequelize } from "sequelize";
import User from "./user.js";
import garage from "./garages.js";
import owner from "./owner.js";
import Post from "./posts.js";
import project from "./project.js";
import owner_has_garages from "./owner_has_garages.js";

const db = {};


// storing all models into db object so we can retrive form that.
db.User = User;
db.garage = garage(sequelize, DataTypes);
db.owner = owner(sequelize, DataTypes);
db.owner_has_garages = owner_has_garages(sequelize, DataTypes);
db.Post = Post;
db.project = project;

// association
// db.project.associate({ User });
// db.User.associate({ project });

// // db.garage.belongsToMany(db.owner, {
// //   through: db.garage_pivot
// // });
// db.garage.associate({ owner: db.owner, owner_has_garages: db.garage_pivot })
// // db.owner.belongsToMany(db.garage, {
// //   through: db.garage_pivot
// // });
// db.owner.associate({ garage: db.garage, owner_has_garages: db.garage_pivot })
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
// 'use strict';

// import { readdirSync } from 'fs';
// import { basename as _basename, join } from 'path';
// import Sequelize, { DataTypes } from 'sequelize';
// import { env as _env } from 'process';
// const basename = _basename(__filename);
// const env = _env.NODE_ENV || 'development';
// const config = require(__dirname + '/../config/config.json')[env];
// const db = {};

// let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(_env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(config.database, config.username, config.password, config);
// }

// readdirSync(__dirname)
//   .filter(file => {
//     return (
//       file.indexOf('.') !== 0 &&
//       file !== basename &&
//       file.slice(-3) === '.js' &&
//       file.indexOf('.test.js') === -1
//     );
//   })
//   .forEach(file => {
//     const model = require(join(__dirname, file))(sequelize, DataTypes);
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// export default db;

