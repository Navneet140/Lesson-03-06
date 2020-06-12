const express = require('express');
const app = express();


const path = require('path');


//setting up the views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use('/css', express.static('assets/css'));
app.use('/javascript', express.static('assets/javascript'));
app.use('/images', express.static('assets/images'));

// Mongo access
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URI, {
  auth: {
    user: process.env.DB_USER,
    password: process.env.DB_PASS
  },
  useNewUrlParser: true,
  useUnifiedTopology: true
}).catch(err => console.error(`Error: ${err}`));

// Implement Body Parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//defining the routes
const routes = require('./routes.js');
app.use('/', routes);


app.listen(process.env.PORT || 3000, port => console.log(`Listening on port ${port}`));