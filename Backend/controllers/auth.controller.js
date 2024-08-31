import { error } from "console";
import User from "../models/user.models.js";
import bcryptjs from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";
const SignUpUser = async (req, res) => {
  try {
    const { Fullname, username, password, confirmPassword, gender } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Password don't match ✖️" });
    }

    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ error: "Username already exists ⚠️" });
    }

    //HASH PASSWORD

    const salt = await bcryptjs.genSalt(10);
    const hashpassword = await bcryptjs.hash(password, salt);

    const BoyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const GirlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const userUser = new User({
      Fullname,
      username,
      password: hashpassword,
      gender,
      ProfilePic: gender === "male" ? BoyProfilePic : GirlProfilePic,
    });
    if (userUser) {
      //Generate JWT token here
      generateTokenAndSetCookie(userUser._id, res);
      const user = await userUser.save();
      return res.status(201).json({
        _id: user._id,
        Fullname: user.Fullname,
        username: user.username,
        ProfilePic: user.ProfilePic,
      });
    } else {
      return res.status(400).json({ error: "Invalid user data ⚠️" });
    }
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ error: "Server Error with Saved" });
  }
};

const LoginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: "Please fill in all fields ⚠️" });
    }
    const user = await User.findOne({ username });
    const IsCorrectPassword = await bcryptjs.compare(
      password,
      user?.password || ""
    );

    if (!user || !IsCorrectPassword) {
      return res.status(400).json({ error: "Invalid password or username 🚫" });
    }

    generateTokenAndSetCookie(user._id, res);

    res.status(201).json({
      _id: user._id,
      Fullname: user.Fullname,
      username: user.username,
      ProfilePic: user.ProfilePic,
    });
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ error: "Server Error with Login" });
  }
};

const LogOutUser = (req, res) => {
  try {
    res.clearCookie("chat-app-jwt");
    res.status(200).json({ message: "Logged out successful" });
  } catch (error) {
    console.log("Error in logout controller", error.message);
    res.status(500).json({ error: "Server Error with Logout" });
  }
};

export { SignUpUser, LogOutUser, LoginUser };
