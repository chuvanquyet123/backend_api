const bcrypt = require("bcrypt");

const db = require("../commom/connect");

const User = function (users) {
  this.id_user = users.id_user;
  this.username = users.username;
  this.password = users.password;
};

User.login = function (data, result) {
  try{
    db.query(
    "SELECT * FROM users WHERE email = ? AND password = ?",
    [data.email, data.password],
    function (err, user) {
      if (err || user.length == 0) {
        result(null);
      } else {
        result(user[0]);
      }
    }
  );
  }catch(error){
    console.log(error)
  }
};

User.signup = function (user, result) {
  try{
    db.query(
    "INSERT INTO users(username, password, email) VALUES (? , ?, ?)",
    [user.username, user.password, user.email],
    function (err, data) {
      if (err) {
        result(null);
      } else {
        result({ ...user, user_id: data.insertID });
      }
    }
  );
  }catch(error){
    console.log(error)
  }
  
};
module.exports = User;
