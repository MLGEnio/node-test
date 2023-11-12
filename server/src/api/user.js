// api/user.js
const User = require('../models/user');

const getUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email });
    return user;
  } catch (error) {
    throw error;
  }
};

const createUser = async (userData) => {
  try {
    const user = new User(userData);
    await user.save();
    return user;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getUserByEmail,
  createUser,
  // ... other user-related API services
};
