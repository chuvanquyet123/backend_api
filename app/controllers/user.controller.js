var User = require('../models/user.model');

exports.get_user = function (req, res) {
    User.login(function (data) {
      res.send({ result: data });
    });
};

exports.add_user = function (req, res) {
    var data = req.body;
  
    User.signup(data, function (response) {
      res.send({ result: response });
    });
  };
