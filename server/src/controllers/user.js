// controllers/user.js
const userService = require('../api/user');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers(); // assumes this function exists
    res.json(users);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.createUser = async (req, res) => {
  try {
    const newUser = await userService.createUser(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// ... other controller methods
