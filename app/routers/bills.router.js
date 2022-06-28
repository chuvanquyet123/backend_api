module.exports = function (router) {
    var billController = require('../controllers/bills.controller');

    router.get("/bills", billController.get_list);

    router.post("/bills", billController.add_bill);
};