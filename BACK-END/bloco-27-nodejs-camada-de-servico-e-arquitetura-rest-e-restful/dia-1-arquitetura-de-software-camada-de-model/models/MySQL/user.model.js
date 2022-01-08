const connectionMySQL = require('./connectionMySQL');

const addUser = async (firstName, lastName, email, password) => {
  try {
    const result = await connectionMySQL.execute('INSERT INTO users_crud.users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)', [firstName, lastName, email, password]);

    return result[0].insertId;
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

const getUsers = async () => {
  try {
    const [users] = await connectionMySQL.execute('SELECT * FROM users');

    return users;
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

const getUserId = async (id) => {
  try {
    const [user] = await connectionMySQL.execute('SELECT id, first_name, last_name, email FROM users WHERE id = ?', [id]);

    const result = {
      id: user[0].id,
      firstName: user[0].first_name,
      lastName: user[0].last_name,
      email: user[0].email,
    };

    return result;
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

const updateUser = async (firstName, lastName, email, password, id) => {
  try {
    const newUser = await connectionMySQL.execute('UPDATE users_crud.users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ?', [firstName, lastName, email, password, id]);

    return newUser;
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

module.exports = {
  addUser,
  getUsers,
  getUserId,
  updateUser,
};
