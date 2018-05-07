// Burger Model
//==================

module.exports = function(sequelize, dataTypes) {
    var Burger = sequelize.define('burger', {
        burger_name: dataTypes.STRING,
        devoured: dataTypes.BOOLEAN,
        devourerId: dataTypes.INTEGER
     }, {
        classMethods: {
            associate: function(models) {
                // each burger has one devourer attached to it
                Burger.hasOne(models.devourers)
            }
        }
    });
    return burgers
};
