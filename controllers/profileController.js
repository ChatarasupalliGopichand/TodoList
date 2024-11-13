// controllers/profileController.js

const bcrypt = require('bcryptjs');
const User = require('../models/User');

// Get profile controller
exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching profile', error });
  }
};

// Update profile controller
exports.updateProfile = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const updatedFields = { name, email };
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      updatedFields.password = hashedPassword;
    }

    const user = await User.findByIdAndUpdate(req.userId, updatedFields, { new: true }).select('-password');
    res.json({ message: 'Profile updated successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Error updating profile', error });
  }
};
