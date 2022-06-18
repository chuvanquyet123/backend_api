var Food = require("../models/food.model");

exports.get_list = function (req, res) {
  const categoryID = req.query.category_id
  Food.get_all(function (data) {
    res.send(data);
  }, categoryID );
};

exports.detail = function (req, res) {
  Food.getById(req.params.id, function (response) {
    res.send({ result: response });
  });
};

exports.add_food = function (req, res) {
  var data = req.body;

  Food.create(data, function (response) {
    res.send({ result: response });
  });
};

exports.remove_food = function (req, res) {
  var id = req.params.id;
  Food.remove(id, function (response) {
    res.send({ result: response });
  });
};

exports.update_food = function (req, res) {
  var data = req.body;

  Food.update(data, function (response) {
    res.send({ result: response });
  });
};

exports.search_food = function (req, res) {
  Food.search(req.body.search, function (response) {
    res.send({ result: response });
  });
};
