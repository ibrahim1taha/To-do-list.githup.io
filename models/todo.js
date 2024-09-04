const Sequelize = require('sequelize'); 

const sequelize = require('../util/database'); 

const Tasks = sequelize.define('tasks' , {
    id : {
        type : Sequelize.INTEGER , 
        allowNull : false , 
        autoIncrement : true , 
        primaryKey : true 
    }, 
    taskTitle : Sequelize.STRING  
}) ;


module.exports = Tasks ; 