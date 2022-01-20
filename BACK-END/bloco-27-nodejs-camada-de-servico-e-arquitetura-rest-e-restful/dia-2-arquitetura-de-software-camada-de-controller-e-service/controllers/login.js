const { findUserService } = require('../services/users');

const login = async (req, res, next) => {
  try {
    const { userName, password } = req.body;

    const result = await findUserService(userName, password);

    return res.status(200).json(result);
  } catch (error) {
    console.log(`Error login: ${error.message}`);
    return next(error);
  }
};

module.exports = {
  login,
};
