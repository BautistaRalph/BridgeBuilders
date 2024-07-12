import User from "../../schemas/UserSchema.js";
import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const apiRouter = express.Router();

//sign up endpoint
apiRouter.post("/signup", async (req, res) => {
  try {
    const { username, password, userType, accountType } = req.body;
    if (!username || !password || !userType || !accountType) {
      return res.status(400).json({
        error: "Please provide username, password, userType, and accountType",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      username,
      password: hashedPassword,
      userType,
      accountType,
    });

    await user.save();
    console.log(`User created: ${username}`);
    res.status(201).json({ message: "User created successfully" });
  } catch (e) {
    console.error("Error creating user:", e);
    if (e.code === 11000) {
      res.status(400).json({ error: "Username already exists" });
    } else {
      res.status(500).json({ error: "Internal server error" });
    }
  }
});

//login endpoint
apiRouter.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    console.log("Login attempt for user:", username);
    if (!user) {
      console.log("User not found");
      return res.status(500).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      console.log("Invalid password");
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id, username: user.username },
      "your_jwt_secret",
      {
        expiresIn: "1h",
      }
    );

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default apiRouter;
