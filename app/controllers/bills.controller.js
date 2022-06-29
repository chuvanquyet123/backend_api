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
        console.log(response.cart)
    });
};