var Categories = require("../models/categories.model");

exports.get_list = function (req, res) {
  Categories.get_all(function (data) {
    res.send( data );
  });
};

exports.detail = function (req, res) {
  Categories.getById(req.params.id, function(response){
    res.send(response)
  });
};

exports.add_categories = function (req, res) {
  var data = req.body;

  Categories.create(data, function (response) {
    res.send({ result: response });
  });
};

exports.remove_categories = function(req, res){
    var id = req.params.id;
    Categories.remove(id, function(response){
        res.send({result: response});
    });
};

exports.update_categories = function(req, res){
    var data = req.body;

    Categories.update(data, function (response) {
      res.send({ result: response });
    });
}
