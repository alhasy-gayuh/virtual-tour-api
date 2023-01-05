import express from "express";
import {
  getPosts,
  createPost,
  getPostById,
  updatePost,
  deletePost,
} from "../controllers/PostController.js";

const router = express.Router();

// get data admin
router.get("/", getPosts);
router.post("/", createPost);
router.get("/:id", getPostById);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;
