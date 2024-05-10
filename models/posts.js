import { Model, DataTypes, INTEGER } from "sequelize";
import { sequelize } from "../config/connection.js";

class Post extends Model { }

Post.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: DataTypes.STRING,
  description: DataTypes.STRING,
},
  {
    sequelize,
    paranoid: true,
    deletedAt: 'destroyTime',
    modelName: 'Post'
  }
);


// sequelize.sync().then(() => {
//   console.log('Post table created successfully!');
// }).catch((error) => {
//   console.error('Unable to create table : ', error);
// });

export default Post;
