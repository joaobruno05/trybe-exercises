const { createUsersService } = require('../services/users');

const createUsersController = async (req, res, next) => {
  try {
    const { userName, password } = req.body;
    let admin = false;

    if (userName === 'admin' && password === 's3nh4S3gur4???') {
      admin = true;
      await createUsersService(userName, password, admin);

      return res.status(201).json({ message: 'Usuário cadastrado com sucesso!!!' });
    }

    await createUsersService(userName, password, admin);

    return res.status(201).json({ message: 'Usuário cadastrado com sucesso!!!' });
  } catch (error) {
    console.log(`Error: ${error.message}`);
    return next(error);
  }
};

module.exports = {
  createUsersController,
};
