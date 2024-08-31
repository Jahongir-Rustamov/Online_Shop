import express from "express";
import protectRoutes from "../middleware/protectRoutes.js";
import { getUserForSideBar } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", protectRoutes, getUserForSideBar);
export default router;
