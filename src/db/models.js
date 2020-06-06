const Sequelize = require('sequelize')

const db = new Sequelize('codegig', 'giguser', 'gigpass', {
    dialect: 'mysql',
    host: 'localhost'
})

const Gig = db.define('gig', {
    id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title : {
        type: Sequelize.DataTypes.STRING,
        allowNull: false     
    },
    technologies : {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    description : {
        type: Sequelize.DataTypes.STRING,
        allowNull:false
    },
    budget : {
        type: Sequelize.DataTypes.STRING,
        allowNull:false
    },
    email : {
        type:Sequelize.DataTypes.STRING,
        allowNull:false
    }
})

module.exports = {
    db,
    Gig
}