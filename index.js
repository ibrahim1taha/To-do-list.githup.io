const path = require('path'); 
const express = require('express'); 
const app = express(); 
const bodyParser = require('body-parser');
const sequelize = require('./util/database'); 

const port = 3000; 

// Set the view engine to EJS
app.set('view engine', 'ejs'); 
// Specify the directory for EJS templates
app.set('views', path.join(__dirname, 'views'));

// Use body-parser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to render the index view
const todo = require('./routes/todo'); 
app.use('/' , todo)


sequelize
    // .sync({force : true})
    .sync()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running on port: ${port}`); 
        });
    
    }).catch((err) => {
        console.log(err) ; 
    }) ;
