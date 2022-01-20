const { findUserModel, createUsersModel, getUserModel } = require('../models/users');
const errorDefault = require('../error/errorDefault');
const authService = require('./authService');

const findUserService = async (userName, password) => {
  if (!userName || !password) throw (errorDefault(401, 'É necessário usuário e senha para fazer login'));

  const userFound = await findUserModel(userName);

  if (!userFound || userFound.password !== password) throw (errorDefault(401, 'Usuário não existe ou senha inválida'));

  const { password: _password, ...userWhithoutPassword } = userFound;

  const token = authService.generateToken(userWhithoutPassword);

  return ({ token });
};

const createUsersService = async (userName, password, admin) => {
  if (typeof (userName) !== 'string' || userName.length < 5 || typeof (password) !== 'string' || password.length < 5) throw (errorDefault(401, 'Usuário ou senha não permitida!'));

  const user = await createUsersModel(userName, password, admin);

  return user;
};

const getUserService = async () => {
  const user = await getUserModel();

  return user;
};

module.exports = {
  findUserService,
  createUsersService,
  getUserService,
};
