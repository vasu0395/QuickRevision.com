import express from "express";
import {
  createPost,
  getAllPost,
  getPost,
  updatePost,
  deletePost,
} from "../controller/post-controller.js";
const router = express();
router.post("/postz", createPost);
router.get("/posts", getAllPost);
router.get("/post/:id", getPost);
router.post("/update/:id", updatePost);
router.delete("/delete/:id", deletePost);
export default router;
