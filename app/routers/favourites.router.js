module.exports = function (router) {
    var favouritesController = require('../controllers/favourites.controller');

    router.get("/favourites", favouritesController.get_list);

    router.get("/favourites/:id", favouritesController.detail);

    router.post("/favourites", favouritesController.add_favourites);

    router.delete("/favourites", favouritesController.remove_favourites);

    router.put("/favourites", favouritesController.update_favourites);

};