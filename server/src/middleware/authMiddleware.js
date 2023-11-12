// middleware/authMiddleware.js
const authMiddleware = (req, res, next) => {
    // Your authentication logic would go here
    console.log('Authentication check');
    next();
  };
  
  module.exports = authMiddleware;
  