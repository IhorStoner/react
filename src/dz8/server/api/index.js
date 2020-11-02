const { Router } = require('express');
const weather = require('./weather');
const apiRouter = Router();

apiRouter.use('/weather', weather);

module.exports = apiRouter;