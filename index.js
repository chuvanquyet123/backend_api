var express = require('express');
var app = express();


var bodyParzer = require('body-parser');
app.use(bodyParzer.urlencoded({extended: false}));
app.use(bodyParzer.json());

app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:19006');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

require('./app/routers/categories.router')(app);
require('./app/routers/food.router')(app);
require('./app/routers/favourites.router')(app);
require('./app/routers/user.routers')(app);
 
app.listen(4000, function () {
    console.log("server localhost 4000");
})