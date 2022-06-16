const db = require("../commom/connect");

const User = function (users) {
  this.id_user = users.id_user;
  this.user_name = users.user_name;
  this.password = users.password
};

User.login = function (username, password, result) {
  db.query(
    "SELECT * FROM users WHERE user_name = ? AND password = ?",
    username,
    password,
    function (err, user) {
      if (err || user.length == 0) {
        console.log(err)
        result(null);
      } else {
        result(user[0]);
      }
    }
  );
};

User.signup = function(username, password, result){
    db.query("INSERT INTO users SET user_name = ? AND password = ?",
    username,
    password,
    function(err, user) {
        if (err || user.length == 0){
            result(null);
        }else{
            result(user[0]);
        }
    }
    );
};
module.exports = User;

