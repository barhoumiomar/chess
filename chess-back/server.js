require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors()); // Allow frontend requests

// Set up Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Folder to store profile pictures
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  },
});

const upload = multer({ storage });

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// User Schema
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profilePicture: { type: String }, // Add this field to store profile picture URL
});


const User = mongoose.model("User", UserSchema);

// Profile Schema
const ProfileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  fullName: { type: String, required: true },
  bio: { type: String },
  profilePicture: { type: String }, // File path or URL to profile picture
});

const Profile = mongoose.model("Profile", ProfileSchema);

// Signup Route
app.post("/api/auth/signup", async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    res.json({ message: "User registered successfully" });
  } catch (err) {
    res.status(400).json({ message: "Signup failed" });
  }
});

// Login Route
app.post("/api/auth/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: "Login failed" });
  }
});

// Middleware to authenticate JWT and fetch user data
const authenticateJWT = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  
  if (!token) {
    return res.status(403).json({ message: "Access denied, no token provided" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      console.error("JWT Verification Error:", err.message); // Log error details
      return res.status(403).json({ message: "Invalid token", error: err.message });
    }
    req.user = user;
    next();
  });
};



// Profile Creation Route with file upload
app.post("/api/profile", authenticateJWT, upload.single("profilePicture"), async (req, res) => {
  const { fullName, bio } = req.body;
  const { id } = req.user; // From the JWT token
  const profilePicture = req.file ? req.file.path : null; // Get the file path

  try {
    // Check if the user already has a profile
    const existingProfile = await Profile.findOne({ userId: id });
    if (existingProfile) {
      return res.status(400).json({ message: "Profile already exists" });
    }

    const newProfile = new Profile({
      userId: id,
      fullName,
      bio,
      profilePicture, // This will be the file path of the profile picture
    });

    await newProfile.save();
    res.status(201).json({ message: "Profile created successfully", profile: newProfile });
  } catch (err) {
    res.status(500).json({ message: "Profile creation failed", error: err.message });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;  // Use a different port
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
