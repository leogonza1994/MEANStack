const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/rutas');
const cors = require('cors');

const app = express();
app.use(cors());
app.use( bodyParser.json()); 
app.use('/api2', routes);

module.exports = app;