const connectionMySQL = require('./connectionMySQL');

const addUser = async (firstName, lastName, email, password) => {
  try {
    const result = await connectionMySQL.execute('INSERT INTO users_crud.users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)', [firstName, lastName, email, password]);

    return result[0].insertId;
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

module.exports = {
  addUser,
};
