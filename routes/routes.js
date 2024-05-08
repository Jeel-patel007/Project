import express from 'express';
import { bookAdd } from '../controllers/postController.js';

const router = express.Router();

console.log('inside routes');
router.get("/postAdd", (req, res) => {
  console.log('inside route')
  res.render('index.ejs');
});
router.post('/addBook', bookAdd);

export default router;