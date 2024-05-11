import db from "../models/index.js";

export const addPost = (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    db.Post.create(data)
      .then(() => {
        res.status(200)
          .json({ success: true, message: 'Post added' });
      })
  } catch (error) {
    console.log(error);
    res.status(400)
      .json({ success: false, message: 'Something Went Wrong' });
  }
}

export const showPosts = (req, res) => {
  res.render('index');
}

export const fetchPosts = async (req, res) => {
  try {
    const posts = await db.Post.findAll();
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
    // User.hasOne(project);
    // project.belongsTo(User, {
    //   foreignKey: 'user_id',
    // });
    // User.associate({ project });
    // project.associate({ User });
    // const result = await User.findAll({
    //   include: [{
    //     model: project,
    //     required: true
    //   }]
    // });
    // console.log(db);
    const result = await db.garage.findAll();
    // const result = await db.owner.create({});
    res.status(200).json({ success: true, result: result });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: 'Something Went Wrong' });
  }
}

export const updatePost = async (req, res) => {
  try {
    // const data = req.body;
    const result = await db.User.update(
      { lastName: 'patel' },
      {
        where: {
          id: 1
        },
      }
    );
    if (result) {
      res.status(200).json({ success: true, message: 'Data Updated' })
    } else {
      res.status(400).json({ success: false, message: 'Something Went Wrong' })
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: 'Something Went Wrong' })
  }
}

export const deletePost = async (req, res) => {
  try {
    const { id } = req.body
    console.log(id);
    let result = await db.Post.destroy({
      where: {
        id: id
      }
    });
    console.log('result', result);
    if (result) {
      res.status(200).json({ success: true, message: 'post deleted' })
    } else {
      res.status(400).json({ success: false, message: 'Unable to delete record' })
    }
  } catch (error) {
    console.log(error);
    res.send(400).json({ success: false, message: 'Something Went Wrong' })
  }
}