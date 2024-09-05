const express = require('express');

const router = express.Router() ; 

const todoController = require('../controller/todoController') ; 

router.get('/' , todoController.getTasks) ; 
router.post('/' , todoController.addTasks); 
router.post('/delete-task' , todoController.deleteTasks); 

module.exports = router ; 