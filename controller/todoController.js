
const Tasks = require('../models/todo'); 

exports.getTasks = ((req , res , next) => {
    // console.log(req.body.taskTitle); 
    Tasks.findAll().then((tasks) => {
        // console.log(tasks); 
        res.render('todo/index' , {
            title : "todo" , 
            path: '/todo' , 
            appTitle : "todo list" , 
            tasks : tasks , 
        })
    }).catch((err) => {
        console.log(err) ; 
    });
})

exports.addTasks = (req , res , next) => {
    const title = req.body.taskTitle ; 

    Tasks.create({taskTitle : title}).then(() => {
        res.redirect('/') ; 
        console.log(`Task add Successfully -> Task : ${title}`) ; 
    }).catch((err) => {
        console.log(err); 
    });
}