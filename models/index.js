import { sequelize } from "../config/connection.js";
import { DataTypes, Sequelize } from "sequelize";
import User from "./user.js";
import garage from "./garages.js";
import { owner } from "./owner.js";
import Post from "./posts.js";
const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.User = User;
db.garage = garage(sequelize, DataTypes);
db.owner = owner(sequelize, DataTypes);
db.Post = Post;


export default db;