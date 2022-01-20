require('dotenv').config();
const jwt = require('jsonwebtoken');

const JWT_CONFIG = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

const generateToken = (data) => jwt.sign({ data }, process.env.JWT_SECRET, JWT_CONFIG);

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const { userName } = decoded.data;

    return userName;
  } catch (error) {
    console.log('Falha na verificação');
    return null;
  }
};

module.exports = {
  generateToken,
  verifyToken,
};
