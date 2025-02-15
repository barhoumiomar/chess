require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors()); // Allow frontend requests

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// User Schema
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Membership Schema
const MembershipSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  plan: { type: String, required: true },
  cardNumber: { type: String, required: true },
  expiryDate: { type: String, required: true },
  cvv: { type: String, required: true },
  joinedAt: { type: Date, default: Date.now },
});

const User = mongoose.model("User", UserSchema);
const Membership = mongoose.model("Membership", MembershipSchema);

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

// Membership Route to Save User Membership Data
app.post("/api/membership", async (req, res) => {
  try {
    console.log(req.body); 

    const { fullName, email, phone, plan, cardNumber, expiryDate, cvv, username } = req.body;

    
    if (!fullName || !email || !phone || !plan || !cardNumber || !expiryDate || !cvv || !username) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    if (plan === "premium") {
      user.isPremium = true;
      await user.save();
    }

    const newMembership = new Membership({
      user: user._id,
      fullName,
      email,
      phone,
      plan,
      cardNumber,
      expiryDate,
      cvv,
    });

    await newMembership.save();
    res.json({ message: "Membership request submitted successfully!" });
  } catch (err) {
    console.error("Error in membership route:", err);
    res.status(400).json({ message: "Failed to submit membership request" });
  }
});

app.get('/', (req, res) => {
  res.send('API is Running ...');
});

// Start Server
const PORT = process.env.PORT || 5000;  
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
