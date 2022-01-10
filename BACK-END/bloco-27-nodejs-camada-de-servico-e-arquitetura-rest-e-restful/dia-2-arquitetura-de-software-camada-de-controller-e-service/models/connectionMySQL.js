const mysql = require('mysql2/promise');

const connectionMySQL = mysql.createPool({
  host: 'localhost',
  user: 'joaobruno',
  password: 'Jl050918@',
  database: 'cep_lookup',
});

module.exports = connectionMySQL;
