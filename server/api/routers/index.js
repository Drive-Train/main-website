const apiRouter = require('express').Router();

apiRouter.use('/users', require('./users'));

module.exports = apiRouter;
