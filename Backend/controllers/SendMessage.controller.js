import Conversation from "../models/conversation.model.js";
import MessageModel from "../models/message.model.js";
import { getReceiverSocketId, io } from "../soket/soket.js";

async function SendMessage(req, res) {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversations = await Conversation.findOne({
      participants: {
        $all: [senderId, receiverId],
      },
    });

    if (!conversations) {
      conversations = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new MessageModel({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversations.message.push(newMessage._id);
    }

    // await conversations.save();
    // await newMessage.save();

    //this will run in parallel
    await Promise.all([conversations.save(), newMessage.save()]);
    const receiverSocketId = getReceiverSocketId(receiverId);
    if (receiverSocketId) {
      // io.to(<socket_id>).emit() used to send events to specific client
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }

    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in SendMessage controller:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function GetMessage(req, res) {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("message");

    if (!conversation) return res.status(200).json([]);
    const message = conversation.message;
    res.status(200).json(message);
  } catch (error) {
    console.log("Error in SendMessage controller:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
}
export { SendMessage, GetMessage };
