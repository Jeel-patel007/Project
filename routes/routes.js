import express from 'express';
import { addPost, deletePost, fetchPosts, searchPost, showPosts, updatePost } from '../controllers/postController.js';

const router = express.Router();

router.get("/", showPosts)
router.post('/addPost', addPost);
router.get("/posts", fetchPosts);
router.get("/searchPost", searchPost);
router.post("/updatePost", updatePost);
router.post("/deletePost", deletePost);

export default router;