import asyncHandler from "express-async-handler";
import Whiteboard from "../models/whiteboardModel.js";
import User from "../models/userModel.js";

// @desc    Create a new whiteboard
// @route   POST /api/whiteboards
// @access  Private
const createWhiteboard = asyncHandler(async (req, res) => {
  const { name } = req.body;
  const whiteboard = await Whiteboard.create({
    name,
    owner: req.user._id,
  });
  res.status(201).json(whiteboard);
});

// @desc    Get user whiteboards
// @route   GET /api/whiteboards
// @access  Private
const getUserWhiteboards = asyncHandler(async (req, res) => {
  const whiteboards = await Whiteboard.find({ owner: req.user._id });
  res.json(whiteboards);
});

// @desc    Get a whiteboard by ID
// @route   GET /api/whiteboards/:id
// @access  Private
const getWhiteboardById = async (req, res) => {
  try {
    const whiteboard = await Whiteboard.findById(req.params.id);
    if (whiteboard) {
      res.json(whiteboard);
    } else {
      res.status(404).json({ message: "Whiteboard not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Update a whiteboard
// @route   PUT /api/whiteboards/:id
// @access  Private
const updateWhiteboard = async (req, res) => {
  try {
    const whiteboard = await Whiteboard.findById(req.params.id);
    if (whiteboard) {
      whiteboard.data = req.body.data;
      const updatedWhiteboard = await whiteboard.save();
      res.json(updatedWhiteboard);
    } else {
      res.status(404).json({ message: "Whiteboard not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Invite a collaborator to a whiteboard
// @route   POST /api/whiteboards/:id/invite
// @access  Private
const inviteCollaborator = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const whiteboard = await Whiteboard.findById(req.params.id);

  if (!whiteboard) {
    res.status(404);
    throw new Error("Whiteboard not found");
  }

  const user = await User.findOne({ email });

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  if (whiteboard.collaborators.includes(user._id)) {
    res.status(400);
    throw new Error("User is already a collaborator");
  }

  whiteboard.collaborators.push(user._id);
  await whiteboard.save();

  res.status(200).json({ message: "Collaborator added successfully" });
});

const deleteWhiteboard = asyncHandler(async (req, res) => {
  const whiteboard = await Whiteboard.findById(req.params.id);

  if (!whiteboard) {
    res.status(404);
    throw new Error("Whiteboard not found");
  }

  // Check if the user is the owner of the whiteboard
  if (whiteboard.owner.toString() !== req.user._id.toString()) {
    res.status(403);
    throw new Error("User not authorized to delete this whiteboard");
  }

  await Whiteboard.deleteOne({ _id: req.params.id });
  res.json({ message: "Whiteboard removed" });
});

// @desc    Get collaborative whiteboards
// @route   GET /api/whiteboards/collaborative
// @access  Private
const getCollaborativeWhiteboards = asyncHandler(async (req, res) => {
  try {
    console.log("User ID:", req.user._id); // Log the user ID
    const whiteboards = await Whiteboard.find({
      collaborators: req.user._id,
    }).populate("owner", "name");
    console.log("Fetched whiteboards:", whiteboards); // Log the fetched whiteboards
    res.json(whiteboards);
  } catch (error) {
    console.error("Error in getCollaborativeWhiteboards:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

export {
  createWhiteboard,
  deleteWhiteboard,
  getUserWhiteboards,
  getWhiteboardById,
  getCollaborativeWhiteboards,
  updateWhiteboard,
  inviteCollaborator,
};
