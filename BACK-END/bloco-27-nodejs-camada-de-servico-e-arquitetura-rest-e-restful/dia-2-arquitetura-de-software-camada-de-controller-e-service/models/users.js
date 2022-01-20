const connectionMySQL = require('./connectionMySQL');

const findUserModel = async (userName) => {
  const [user] = await connectionMySQL.execute('SELECT * from users WHERE userName = ?', [userName]);

  return user[0];
};

const createUsersModel = async (userName, password, admin) => {
  await connectionMySQL.execute('INSERT INTO users (userName, password, admin) VALUES (?, ?, ?)', [userName, password, admin]);

  return ({ userName, password, admin });
};

const getUserModel = async () => {
  const user = await connectionMySQL.execute('SELECT * from users');

  return user;
};

module.exports = {
  findUserModel,
  createUsersModel,
  getUserModel,
};
