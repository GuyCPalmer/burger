module.exports = {
    up: function(queryInterface, sequelize) {
        return queryInterface.createTable('burgers', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: sequelize.INTEGER
            },
            burger_name: {
                type: sequelize.STRING
            },
            devoured: {
                type: sequelize.BOOLEAN
            },
            createdAt: {
                allowNull: false,
                type: sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: sequelize.DATE
            }
        });
    },
down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('burgers');
    }
};