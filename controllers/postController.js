import { book } from "../models/books.js";

export const bookAdd = async (req, res) => {
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