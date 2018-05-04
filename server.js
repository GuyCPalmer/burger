// Dependencies 
//--------------------------
const express = require ("express");
const bodyParser = require ("body-parser");
const methodOverride = require("method-override");


//Set up express
var app = express();

//serve static content fo rthe app from the public directory
app.use(express.static(process.cwd() + "/public"));

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//set the handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// assign server to access the routes 
var router = require ("./controller/burgers_controller.js");
app.use("/", router);

//open server
var PORT = process.env.PORT || 8080;
    app.listen(PORT, function() {
        console.log("App listening on PORT" + PORT);
    });


