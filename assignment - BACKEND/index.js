const express = require('express');

const bodyParser = require('body-parser');

const groceryRoutes = require('./routes/grocery');

const errorController = require('./controllers/error');



const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control', '*');
  res.setHeader('Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Allow-Headers', 'Content-Type, Authorization');
  next();
});


app.use('/groceries', groceryRoutes);


