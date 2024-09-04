const Sequelize = require('sequelize')  ; 

const sequelize = new Sequelize('todo' , 'root' , 'mysql990' , {
        dialect: 'mysql', // language used , it can be Postgre or something else ; 
        host: 'localhost'
}) ; 

module.exports = sequelize ;