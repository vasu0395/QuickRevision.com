import UserSchema from "./../schema/userSchema.js";
import { body, validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const secretMesage = "VASU$CHAUHAN";

export const createUser = async (req, res) => {
  let success = false;
  console.log(req.body);
  const user = UserSchema(req.body);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success, errors: errors.array() });
  }
  try {
    let userer = await UserSchema.findOne({ username: req.body.username });
    if (userer) {
      return res
        .status(400)
        .json({ success, error: "sorry account already register" });
    }
    const salt = await bcrypt.genSalt(10);
    const setPas = await bcrypt.hash(req.body.password, salt);
    userer = await UserSchema.create({
      username: req.body.username,
      password: setPas,
    });

    const data = {
      user: {
        id: user.id,
      },
    };

    const jwtData = jwt.sign(data, secretMesage);
    console.log(jwtData);
    success = true;
    res.json({ success, jwtData });
  } catch (err) {
    console.log(err);
    res.status(500).send("some error occured in create user");
  }
};

export const loginUser = async (req, res) => {
  console.log(req.body);
  const errors = validationResult(req);
  let success = false;
  if (!errors.isEmpty()) {
    return res.status(400).json({ success, errors: errors.array() });
  }
  const { username, password } = req.body;
  try {
    let user = await UserSchema.findOne({ username });
    if (!user) {
      success = false;
      return res
        .status(400)
        .json({ success, error: "Enter correct credential" });
    }
    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      success = false;
      return res
        .status(400)
        .json({ success, error: "Enter correct credential" });
    }

    const data = {
      user: {
        id: user.id,
      },
    };

    const jwtData = jwt.sign(data, secretMesage);
    success = true;
    res.json({ success, jwtData });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("some error occured in login user");
  }
};

export const getUser = async (req, res) => {
  let success = false;
  try {
    var userId = req.user.id;
    const user = await UserSchema.findById(userId).select("-password");
    console.log(user);
    success = true;
    res.status(200).json({ success, user });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success, error: "some error occured in get user" });
  }
};
