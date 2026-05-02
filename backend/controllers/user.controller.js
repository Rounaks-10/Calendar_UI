import User from "../models/user.model.js";
import EmailValidator from "email-validator";

export const createUser = async (req, res) => {
  try {
    const { name, email, branch, year } = req.body;

    // 🔴 Check required fields
    if (!name || !email || !branch || !year) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // 🔴 Email validation (using email-validator)
    if (!EmailValidator.validate(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    // 🔴 Check duplicate email
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // ✅ Create user
    const user = await User.create({
      name,
      email,
      branch,
      year,
    });

    res.status(201).json({
      success: true,
      message: "Follow the steps to setup, Thank You :)",
      user,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};