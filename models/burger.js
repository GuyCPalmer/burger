// Burger Model
//==================

module.exports = function(sequelize, dataTypes) {
    var Burger = sequelize.define('burger', {
        burger_name: {
        type: dataTypes.STRING,
        devoured: dataTypes.BOOLEAN,
        devourerId: dataTypes.INTEGER,
        allowNull: false

     }, 
     devoured: {
        type: dataTypes.BOOLEAN,
        defaultValue: 0
    }
    });
return Burger;
};