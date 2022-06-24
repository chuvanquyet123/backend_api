var User = require("../models/user.model");

exports.login = function (req, res) {
  var data = req.body;
  User.login(data, function (response) {
    if (response == null) {
      res.send({ msg: "Login failed" });
    } else {
      const user = {
        user_id: response.user_id,
        username: response.username,
        email: response.email,
        image: response.image,
      };
      res.send(user);
    }
  });
};

exports.register = function (req, res) {
  var data = req.body;

  User.signup(data, function (response) {
    if( response == null){
      res.send({msg: "Signup failed"})
    }else{
      const user = {
        user_id: response.user_id,
        username: response.username,
        email: response.email,
        image: response.image,
      };
      res.send(user);
    }
    // res.send(response);
  });
};
