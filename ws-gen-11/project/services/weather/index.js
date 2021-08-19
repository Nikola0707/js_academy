const express = require("express");
const app = express();
const locationRouter = require('./routers/location');
const regionRouter = require('./routers/region')
const jwt = require('express-jwt');
const unauthorizedErrorHandler = require('../../lib/handlers/unathorized-error-handler');
const serverStartLogger = require('../../lib/handlers/server-start-logger');

require('../../lib/db/db');
require('dotenv').config()

app.use(express.json());
app.use(jwt({
  secret: process.env.SECRET_AUTH_KEY,
  algorithms: ['HS256']
}));
app.use((err, req, res, next) => unauthorizedErrorHandler(err, req, res, next));
app.use('/weather/locations', locationRouter);
app.use('/weather/regions', regionRouter)
app.listen(process.env.WEATHER_API_PORT, error => serverStartLogger('Weather', process.env.WEATHER_API_PORT, error));
