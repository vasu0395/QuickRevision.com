import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const users = mongoose.model("users_info", UserSchema);
export default users;
