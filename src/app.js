const express = require('express');
const morgan = require('morgan');
const config = require('./config');

const parking = require('./modulos/parking/rutas')

const app = express();

app.use(morgan('dev'));

app.set('port', config.app.port);

app.use('/api/vehicles', parking)

module.exports = app;