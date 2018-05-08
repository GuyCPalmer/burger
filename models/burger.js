//Export the database function for the controller (burgers_controller.js)

// The burger has a burger_name attribute of type DataTypes.String
// and a devoured attribute that is false by default
module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        },
        devoured: {
            type:DataTypes.BOOLEAN,
            defaultValue: false
        }
    },
    {
        freezeTableName: true,

        tableName: "Burger"
    });
    return Burger
};