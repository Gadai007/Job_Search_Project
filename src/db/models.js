const Sequelize = require('sequelize')


let db

if(process.env.DATABASE_URL){
    db = new Sequelize(process.env.DATABASE_URL)
}
else {
    db = new Sequelize('codegig', 'giguser', 'gigpass', {
        dialect: 'mysql',
        host: 'localhost'
    })
}


const Gig = db.define('gig', {
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