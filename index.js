var express = require('express');
var app = express();


var bodyParzer = require('body-parser');
app.use(bodyParzer.urlencoded({extended: false}));
app.use(bodyParzer.json());

require('./app/routers/categories.router')(app);
require('./app/routers/food.router')(app);


app.listen(4000, function () {
    console.log("server localhost 4000");
})