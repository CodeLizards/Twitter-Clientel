var mysql = require('mysql');


var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'sites'
});

connection.connect();

module.exports = connection;