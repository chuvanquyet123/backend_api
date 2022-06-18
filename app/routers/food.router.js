module.exports = function (router) {
    var foodController = require('../controllers/food.controller');

    router.get("/products", foodController.get_list);

    router.get("/products/:id", foodController.detail);

    router.post("/products", foodController.add_food);

    router.delete("/products/:id", foodController.remove_food);

    router.put("/products", foodController.update_food);

};