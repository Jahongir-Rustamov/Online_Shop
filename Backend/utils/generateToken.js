import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const Token = jwt.sign({ userId }, process.env.JWT_TOKEN_SECRET, {
    expiresIn: "15d",
  });
  res.cookie("chat-app-jwt", Token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV !== "development",
  });
};

export default generateTokenAndSetCookie;
