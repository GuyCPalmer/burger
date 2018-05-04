// Dependencies 
//--------------------------
const express = require ("express");
const bodyParser = require ("body-parser");
const methodOverride = require("method-override");
const path = require("path");

var PORT = process.env.PORT || 8080;

var app = express();
var db = require ('./models');
var router = require ("./controller/burgers_controller.js");

//serve static content fo rthe app from the public directory
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

//Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

//set the handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// assign server to access the routes 
app.use("/", routes);

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT" + PORT);
    });
});


