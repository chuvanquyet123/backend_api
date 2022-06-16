var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  // port:'3306',
  user: "root",
  password: "Chuvanquyet@123",
  database: "bee_food",
});

connection.connect(function (err) {
  if (err) console.error("connect with my sql false", err);
});

module.exports = connection;
