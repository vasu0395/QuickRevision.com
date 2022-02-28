import Post from "../schema/post-schema.js";
export const createPost = async (req, res) => {
  console.log(req.body);
  try {
    const post = await new Post(req.body);
    post.save();
    res.status(200).json("vasu you did it");
  } catch (error) {
    console.log("error in postcontroller");
    res.status(500).json(error);
  }
};

export const getAllPost = async (req, res) => {
  let username = req.query.username;
  console.log(username);
  let Posts;
  try {
    if (username) {
      Posts = await Post.find({ username: username });
    } else Posts = await Post.find({});
    res.status(200).json(Posts);
  } catch (error) {
    console.log("error in postcontroller getPost");
    res.status(500).json(error);
  }
};

export const getPost = async (req, res) => {
  try {
    let post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    console.log("error in getPost");
    res.status(500).json(error);
  }
};

export const updatePost = async (req, res) => {
  console.log(req.params.id);
  try {
    await Post.findByIdAndUpdate(req.params.id, { $set: req.body });
    res.status(200).json("update successful");
  } catch (error) {
    console.log("error in updatePost");
    res.status(500).json(error);
  }
};

export const deletePost = async (req, res) => {
  try {
    let post = await Post.findById(req.params.id);
    await post.delete();
    res.status(200).json("delete successful");
  } catch (error) {
    console.log("error in updatePost");
    res.status(500).json(error);
  }
};
