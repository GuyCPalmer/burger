module.exports = {
    up: function(queryInterface, Sequelize) {
      return queryInterface.createTable('devourers', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        devourer_name: {
          type: Sequelize.STRING
        },
        burgerId: {
            type: sequelize.INTEGER,
            referencess: {
                model: 'burger', 
                key: 'id'
            },
            onUpdate: 'cascade',
            onDelete: 'cascade'
        },
        createdAt: {
            allowNull: false,
            type:Sequelize.DATE
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
        }
        });
    },
    down: function(queryInterface, Sequelize) {
        return queryInterface.dropTable('devourers');
    }
};