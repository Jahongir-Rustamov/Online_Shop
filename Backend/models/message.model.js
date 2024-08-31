import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
    receiverId: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
    message: {
      required: true,
      type: String,
    },
  },
  { timestamps: true }
);

const MessageModel = mongoose.model("MessageModel", messageSchema);

export default MessageModel;
