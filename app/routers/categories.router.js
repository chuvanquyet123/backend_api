module.exports = function (router) {
    var categoriesController = require('../controllers/categories.controller');

    router.get("/categories", categoriesController.get_list);

    router.get("/categories/:id", categoriesController.detail);

    router.post("/categories", categoriesController.add_categories);

    router.delete("/categories/:id", categoriesController.remove_categories);

    router.put("/categories", categoriesController.update_categories);

    // router.get("/food/list", foodController.get_list);

    // router.get("/food/detail/:id", foodController.detail);

    // router.post("/food/add", foodController.add_food);

    // router.delete("/food/delete/:id", foodController.remove_food);

    // router.put("/food/update", foodController.update_food);
};