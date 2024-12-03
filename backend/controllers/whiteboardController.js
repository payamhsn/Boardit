import asyncHandler from "express-async-handler";
import Whiteboard from "../models/whiteboardModel.js";

// @desc    Create a new whiteboard
// @route   POST /api/whiteboards
// @access  Private
const createWhiteboard = asyncHandler(async (req, res) => {
  const { name } = req.body;

  const whiteboard = await Whiteboard.create({
    name,
    owner: req.user._id,
  });

  if (whiteboard) {
    res.status(201).json(whiteboard);
  } else {
    res.status(400);
    throw new Error("Invalid whiteboard data");
  }
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
const getWhiteboardById = asyncHandler(async (req, res) => {
  const whiteboard = await Whiteboard.findById(req.params.id);

  if (whiteboard) {
    res.json(whiteboard);
  } else {
    res.status(404);
    throw new Error("Whiteboard not found");
  }
});

// @desc    Update a whiteboard
// @route   PUT /api/whiteboards/:id
// @access  Private
const updateWhiteboard = asyncHandler(async (req, res) => {
  const { name, data, collaborators } = req.body;

  const whiteboard = await Whiteboard.findById(req.params.id);

  if (whiteboard) {
    whiteboard.name = name || whiteboard.name;
    whiteboard.data = data || whiteboard.data;
    whiteboard.collaborators = collaborators || whiteboard.collaborators;

    const updatedWhiteboard = await whiteboard.save();
    res.json(updatedWhiteboard);
  } else {
    res.status(404);
    throw new Error("Whiteboard not found");
  }
});

export {
  createWhiteboard,
  getUserWhiteboards,
  getWhiteboardById,
  updateWhiteboard,
};
