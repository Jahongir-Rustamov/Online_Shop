import express from "express";
import {
  GetMessage,
  SendMessage,
} from "../controllers/SendMessage.controller.js";
import protectRoutes from "../middleware/protectRoutes.js";

const router = express.Router();

router.get("/:id", protectRoutes, GetMessage);
router.post("/send/:id", protectRoutes, SendMessage);

export default router;
