import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  createWhiteboard,
  deleteWhiteboard,
  getUserWhiteboards,
  getWhiteboardById,
  updateWhiteboard,
  inviteCollaborator,
  getCollaborativeWhiteboards,
} from "../controllers/whiteboardController.js";

const router = express.Router();

// Collaborative whiteboards route
router.get("/collaborative", protect, getCollaborativeWhiteboards);

// User's whiteboards routes
router
  .route("/")
  .get(protect, getUserWhiteboards)
  .post(protect, createWhiteboard);

// Individual whiteboard routes
router
  .route("/:id")
  .get(protect, getWhiteboardById)
  .put(protect, updateWhiteboard)
  .delete(protect, deleteWhiteboard);

// Invite collaborator route
router.post("/:id/invite", protect, inviteCollaborator);

export default router;
