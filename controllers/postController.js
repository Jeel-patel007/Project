import { Op } from "sequelize";
import { book } from "../models/books.js";
import { Sequelize, DataTypes } from "sequelize";
import project from "../models/project.js";
import User from "../models/user.js";

// import db from "../models/index.js";
// const project = Sequelize['import'](path.join(__dirname, '../models/project.js'))


// const project = db.import('./path/to/models/project');

export const bookAdd = (req, res) => {
  try {
    const data = req.body;
    console.log(req.body)
    book.create(data)
      .then(() => {
        res.status(200)
          .json({ success: true, message: 'book added' });
      })
  } catch (error) {
    res.status(400)
      .json({ success: false, message: 'Something Went Wrong' });
  }
}

export const showPosts = (req, res) => {
  res.render('index');
}

export const fetchPosts = async (req, res) => {
  try {
    const posts = await book.findAll();
    res.status(200).json({ success: true, result: posts });
  } catch (error) {
    res.status(400).json({ success: false, message: 'Something Went Wrong' });
  }
}

export const searchPost = async (req, res) => {
  try {
    // const data = 'think';
    // const result = await book.findAll({
    //   attributes: ['id', 'title', [Sequelize.col('subject'), 'description']],
    //   where: {
    //     title: {
    //       [Op.like]: `%${data}%`,
    //     },
    //   },
    // });
    // console.log('inside');
    User.hasOne(project);
    project.belongsTo(User, {
      foreignKey: 'user_id'
    });
    const result = await User.findAll({
      include: [{
        model: project,
      }]
    });
    // const result = await User.findOne();
    console.log(result);
    res.status(200).json({ success: true, result: result });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: 'Something Went Wrong' });
  }
}