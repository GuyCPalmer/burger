//dependencies
var express = require("express");
var router = express.Router();
var db = require('../models/burger.js');

//extracts sequelize connection from models
//var sequelizeConnection = models.sequelize;

//sync the tables
//sequelizeConnection.sync();

//create routes --- index redirect
router.get("/", function(req, res) {
    res.redirect('/index');
  });

 // index page 
 router.get('index', function (req, res) {
     //sequelize query to get all burgers from database
     models.burgers.findAll({
         include: [{model: models.devourers}]
     }).then(function(data){
         //pass returned data into a handlebars object and render it
         var hbsObject = { burgers: data };
         //console.log(data)
         res.render('index', hbsObject);
     })
 });

 //create new burger
 router.post('/burger/create', function (req, res) {
     //sequelize query to add new burget to database
     burgers.create(
         {
             burger_name: req.body.burger_name,
             devoured: false
         }
     ).then (function() {
         //after burger is added refreash page
         res.redirect('/index');
     });
 });

 //Devour burger
 router.post('/burger/eat/:id', function (req, res) {
     // if no name was added make it a "whataburger"
     if(req.body.burgerEater == "" || req.body.burgerEater == null){
         req.body.burgerEater = "Whataburger";
     }

     //create a new burger devourer and associate it to the eten burgers id
     models.devoureres.create({
         devourer_name: req.body.burgerEater,
         burgerId: req.params.Id
     })

     //select eaten burger by id
     .then(function(newDevourer){
         models.burgers.findOne( {where: {id: req.params.id} })

         //use returned burger object to
         .then(function(eatenBurger){
             //update the burgers status as eaten
             eatenBurger.update({
                 devoured: true,
             })
             //when the burger is devoured refresh page
             .then(function() {
                 res.redurect('/index');
             });
         });
     });
 });

 //export route
 module.exports = router;