module.exports = function (router) {
    var favouritesController = require('../controllers/favourites.controller');

    router.get("/favourites", favouritesController.get_list);

    router.get("/favourites/:id", favouritesController.detail);

    router.post("/favourites", favouritesController.add_favourites);

    router.delete("/favourites/:id", favouritesController.remove_favourites);

    router.put("/favourites", favouritesController.update_favourites);

    // router.get("/food/list", foodController.get_list);

    // router.get("/food/detail/:id", foodController.detail);

    // router.post("/food/add", foodController.add_food);

    // router.delete("/food/delete/:id", foodController.remove_food);

    // router.put("/food/update", foodController.update_food);
};