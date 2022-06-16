var Favourites = require("../models/favourites.model");

exports.get_list = function (req, res) {
  Favourites.get_all(function (data) {
    res.send({ result: data });
  });
};

exports.detail = function (req, res) {
  Favourites.getById(req.params.id, function(response){
    res.send({result: response})
  });
};

exports.add_favourites = function (req, res) {
  var data = req.body;

  Favourites.create(data, function (response) {
    res.send({ result: response });
  });
};

exports.remove_favourites = function(req, res){
    var id = req.params.id;
    Favourites.remove(id, function(response){
        res.send({result: response});
    });
};

exports.update_favourites = function(req, res){
    var data = req.body;

    Favourites.update(data, function (response) {
      res.send({ result: response });
    });
}
