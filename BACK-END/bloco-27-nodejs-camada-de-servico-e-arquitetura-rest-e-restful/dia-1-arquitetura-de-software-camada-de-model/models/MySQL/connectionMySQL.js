const mysql = require('mysql2/promise');

const connectionMySQL = mysql.createPool({
  host: 'localhost',
  user: 'joaobruno',
  password: 'Jl050918@',
  database: 'users_crud',
});

module.exports = connectionMySQL;
