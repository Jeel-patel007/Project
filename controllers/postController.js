import { book } from "../models/books.js";

export const bookAdd = async (req, res) => {
  try {
    const data = req.body;
    console.log(req.body)
    book.create(data).then((result) => {
      res.status(200)
        .json({ success: true, message: 'book added' });
    })
    // const books = await book.findAll({
    //   where: {
    //     id: 1,
    //   },
    // });
    // res.status(200).json(books)
  } catch (error) {
    res.status(400)
      .json({ success: false, message: error })
  }
}