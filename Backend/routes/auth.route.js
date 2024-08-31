import express from "express";
import {
  LoginUser,
  LogOutUser,
  SignUpUser,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", SignUpUser);

router.post("/login", LoginUser);

router.post("/logout", LogOutUser);

export default router;
