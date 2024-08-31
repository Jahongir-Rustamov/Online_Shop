import jwt from "jsonwebtoken";
import User from "../models/user.models.js";

const protectRoutes = async (req, res, next) => {
  try {
    const token = req.cookies["chat-app-jwt"];

    if (!token) {
      return res
        .status(401)
        .json({ error: "Unauthorized - No Token Provided" });
    }
    const decoded = jwt.verify(token, process.env.JWT_TOKEN_SECRET);

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log("Error in protectRoutes middleware:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default protectRoutes;
