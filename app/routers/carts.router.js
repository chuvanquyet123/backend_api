module.exports = function (router){
    var cartsController = require('../controllers/carts.controller');

    router.get("/carts", cartsController.get_list);
}