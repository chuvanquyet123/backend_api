var Food = require("../models/food.model");

exports.get_list = function (req, res) {
  Food.get_all(function (data) {
    res.send({ result: data });
  });
};

exports.detail = function (req, res) {
  Food.getById(req.params.id, function(response){
    res.send({result: response})
  });
};

exports.add_food = function (req, res) {
  var data = req.body;

  Food.create(data, function (response) {
    res.send({ result: response });
  });
};

exports.remove_food = function(req, res){
    var id = req.params.id;
    Food.remove(id, function(response){
        res.send({result: response});
    });
};

exports.update_food = function(req, res){
    var data = req.body;

    Food.update(data, function (response) {
      res.send({ result: response });
    });
}
