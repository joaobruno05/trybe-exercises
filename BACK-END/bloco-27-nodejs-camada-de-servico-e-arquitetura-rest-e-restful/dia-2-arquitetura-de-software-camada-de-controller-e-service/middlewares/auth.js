const authService = require('../services/authService');

const auth = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) return res.status(401).json({ message: 'Token não informado!' });

    const user = authService.verifyToken(authorization);

    req.user = user.userName;
    req.admin = user.admin;

    if (!user) return res.status(401).json({ message: 'Token inválido!' });

    next();
  } catch (error) {
    console.log(`Error auth: ${error.message}`);
    return res.status(401).json({ message: 'Falha na autenticação' });
  }
};

module.exports = auth;
