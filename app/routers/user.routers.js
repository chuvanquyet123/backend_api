module.exports = function (router) {
    var userController = require('../controllers/user.controller');


    router.post("/login", userController.login);

    // router.get("/foods/:id", foodController.detail);

    router.post("/register", userController.register);
};