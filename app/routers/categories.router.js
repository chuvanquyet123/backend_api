module.exports = function (router) {
    var categoriesController = require('../controllers/categories.controller');

    router.get("/categories", categoriesController.get_list);

    router.get("/categories/:id", categoriesController.detail);

    router.post("/categories", categoriesController.add_categories);

    router.delete("/categories/:id", categoriesController.remove_categories);

    router.put("/categories", categoriesController.update_categories);

};