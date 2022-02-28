import mongoose from "mongoose";

const PostSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
  },
  currentdata: {
    type: Date,
  },
  username: {
    type: String,
    required: true,
  },
});

const Post = mongoose.model("post", PostSchema);
export default Post;
