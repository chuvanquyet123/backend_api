module.exports = function (router) {
    var foodController = require('../controllers/food.controller');

    router.get("/foods", foodController.get_list);

    router.get("/foods/:id", foodController.detail);

    router.post("/foods", foodController.add_food);

    router.delete("/foods/:id", foodController.remove_food);

    router.put("/foods", foodController.update_food);

    // router.get("/food/list", foodController.get_list);

    // router.get("/food/detail/:id", foodController.detail);

    // router.post("/food/add", foodController.add_food);

    // router.delete("/food/delete/:id", foodController.remove_food);

    // router.put("/food/update", foodController.update_food);
};