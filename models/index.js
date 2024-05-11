import { sequelize } from "../config/connection.js";
import { DataTypes, Sequelize } from "sequelize";
import User from "./user.js";
import garage from "./garages.js";
import { owner } from "./owner.js";
import Post from "./posts.js";
import project from "./project.js";
import owner_has_garages from "./owner_has_garages.js";

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.User = User;
db.garage = garage(sequelize, DataTypes);
db.owner = owner(sequelize, DataTypes);
db.garage_pivot = owner_has_garages(sequelize, DataTypes);
db.Post = Post;
db.project = project;
db.project.associate({ User });
db.User.associate({ project });

db.garage.belongsToMany(db.owner, {
  through: db.garage_pivot
});
db.owner.belongsToMany(db.garage, {
  through: db.garage_pivot
});

export default db;