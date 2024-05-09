import express from 'express';
import { bookAdd, fetchPosts, showPosts } from '../controllers/postController.js';

const router = express.Router();

router.get("/", showPosts)
router.post('/addBook', bookAdd);
router.get("/posts", fetchPosts);

export default router;