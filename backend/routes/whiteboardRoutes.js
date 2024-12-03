import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  createWhiteboard,
  getUserWhiteboards,
  getWhiteboardById,
  updateWhiteboard,
  inviteCollaborator,
  deleteWhiteboard,
} from "../controllers/whiteboardController.js";

const router = express.Router();

router.post("/:id/invite", protect, inviteCollaborator);

router
  .route("/")
  .post(protect, createWhiteboard)
  .get(protect, getUserWhiteboards);
router
  .route("/:id")
  .get(protect, getWhiteboardById)
  .put(protect, updateWhiteboard)
  .delete(protect, deleteWhiteboard);

export default router;
