module.exports = function (router) {
    var foodController = require('../controllers/food.controller');

    router.get("/foods", foodController.get_list);

    router.get("/foods/:id", foodController.detail);

    router.post("/foods", foodController.add_food);

    router.delete("/foods/:id", foodController.remove_food);

    router.put("/foods", foodController.update_food);

    router.get("/search", foodController.search_food);

};