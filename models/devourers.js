// Burger Eater Model
//======================

module.exports = function(sequelize, DataTypes) {
    var devourers = sequelize.devine('devourers', {
        devourer_name: DataTypes.STRING,
        burgerId: DataTypes.INTEGER
    }, {
        classMethod: {
            associate: function(models) {
                //doesn't need to be included the hasOne() function in the burger model does it
                //devourers.belongsTo(models.burgers);
            }
        }
    });
    return devourers;
};