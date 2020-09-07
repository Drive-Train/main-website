const apiRouter = require('express').Router();

apiRouter.use('/bios', require('./bios'));
apiRouter.use('/users', require('./users'));

module.exports = apiRouter;
