import express from "express";
import {
  createUser,
  loginUser,
  getUser,
} from "./../controller/userController.js";
import { body, validationResult } from "express-validator";
import { fetchuser } from "./../middleware/fetchuser.js";
const router = express();

router.post(
  "/create",
  [
    body("username").isLength({ min: 4 }),
    body("password").isLength({ min: 5 }),
  ],
  createUser
);

router.post(
  "/login",
  [
    body("username").isLength({ min: 4 }),
    body("password").isLength({ min: 5 }),
  ],
  loginUser
);

router.post("/getUser", fetchuser, getUser);

export default router;
