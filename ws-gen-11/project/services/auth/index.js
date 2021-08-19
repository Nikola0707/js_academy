const express = require("express");
const app = express();
const v1 = require('./routers/v1');
const usersRouter = require('./routers/users');
const jwt = require('express-jwt');
const unauthorizedErrorHandler = require('../../lib/handlers/unathorized-error-handler');
const serverStartLogger = require('../../lib/handlers/server-start-logger');

require('../../lib/db/db');
require('dotenv').config()

app.use(express.json());
app.use(jwt({
  secret: process.env.SECRET_AUTH_KEY,
  algorithms: ['HS256']
}).unless({
  path: [
    {
      url: '/api/v1/auth/login', methods: ['POST']
    },
    {
      url: '/api/v1/auth/register', methods: ['POST']
    }
  ]
}));
app.use((err, req, res, next) => unauthorizedErrorHandler(err, req, res, next));
app.use('/api/v1/auth', v1);
app.use('/users', usersRouter);
app.listen(process.env.AUTH_API_PORT, error => serverStartLogger('Auth', process.env.AUTH_API_PORT, error));
