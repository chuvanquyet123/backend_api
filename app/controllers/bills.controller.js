var Bill = require("../models/bills.model");

exports.get_list = function (req, res) {
    const userId = req.query.user_id;
    Bill.getBill(function (data) {
        res.send(data);
    }, userId)
};

exports.add_bill = function (req, res) {
    var data = req.body;
    Bill.create(data, function(response){
        res.send(response);
    });
};

exports.detail = function (req, res){
    console.log(req.query.cart)
    const userId = req.query.user_id;
    Bill.getById(req.params.id, function(response){
        res.send(response)
        console.log('null',response)
    }, userId);
};