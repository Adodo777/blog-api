const jwt = require('jsonwebtoken');

const generateToken = async (user) => {
  const token = jwt.sign({ userId: user._id, email: user.email }, process.env.SECRET_KEY, {
    expiresIn: '1h', // Durée de vie du token
  });
  return token;
};

const validateToken = async (token) => {
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    return decoded;
  } catch (error) {
    return null;
  }
};


module.exports = { generateToken, validateToken };
