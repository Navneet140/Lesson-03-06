const express = require('express');
const app = express();


const path = require('path');


//setting up the views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//defining the routes
const routes = require('./routes.js');
app.use('/', routes);


app.listen(process.env.PORT || 3000, port => console.log(`Listening on port ${port}`));