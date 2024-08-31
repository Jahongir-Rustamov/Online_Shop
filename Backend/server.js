import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import { mongodb } from "./db/connectMongodb.js";
import Message from "./routes/message.route.js";
import { server, app } from "./soket/soket.js";

const __dirname = path.resolve();
dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/message", Message);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/Frontend/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/Frontend/dist/index.html"));
});
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  mongodb();
  console.log(`Server running on port:${PORT}`);
});
