import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/mongoose.js"
import { createUser } from "./controllers/user.controller.js";
import cors from "cors";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors())

// Connect DB
connectDB();

// Test Route
app.get("/", (req, res) => {
  res.send(" API is running...");
});
app.post("/api/users/add", createUser);


// Server start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🔥 Server running on port ${PORT}`);
});