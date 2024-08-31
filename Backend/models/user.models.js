import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    Fullname: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female"],
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    ProfilePic: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
