import Post from "../models/Post.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = new Post(req.body);
  try {
    const created = await post.save();
    res.json(created);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getPostById = async (req, res) => {
  try {
    const postId = await Post.findById(req.params.id);
    res.json(postId);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const id = await Post.findById(req.params.id);
  if (!id) return res.status(400).json({ message: "data tidak di temukan" });
  try {
    const updated = await Post.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deletePost = async (req, res) => {
  const id = await Post.findById(req.params.id);
  if (!id) return res.status(400).json({ message: "data tidak di temukan" });
  try {
    const deleted = await Post.deleteOne({ _id: req.params.id });
    res.json(deleted);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
