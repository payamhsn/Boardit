import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  createWhiteboard,
  getUserWhiteboards,
  getWhiteboardById,
  updateWhiteboard,
} from "../controllers/whiteboardController.js";

const router = express.Router();

router
  .route("/")
  .post(protect, createWhiteboard)
  .get(protect, getUserWhiteboards);
router
  .route("/:id")
  .get(protect, getWhiteboardById)
  .put(protect, updateWhiteboard);

export default router;
