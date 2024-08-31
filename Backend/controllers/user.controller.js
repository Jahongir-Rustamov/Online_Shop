import User from "../models/user.models.js";

async function getUserForSideBar(req, res) {
  try {
    const loggedInUserId = req.user._id;

    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.error("Error in getUserForSideBar controller:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
}

export { getUserForSideBar };
