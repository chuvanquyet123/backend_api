var Carts = require("../models/carts.model");

exports.get_list = function (req, res){
    const userId = req.query.user_id;
    Carts.get_all(function (data) {
        res.send(data);
    }, userId);
};