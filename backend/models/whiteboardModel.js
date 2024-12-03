import mongoose from "mongoose";

const whiteboardSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    data: {
      type: String,
      default: "",
    },
    collaborators: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Whiteboard = mongoose.model("Whiteboard", whiteboardSchema);

export default Whiteboard;
