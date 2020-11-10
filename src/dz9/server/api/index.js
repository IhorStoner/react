const { Router } = require('express');
const students = require('./students');
const apiRouter = Router();

apiRouter.use('/students', students);

module.exports = apiRouter;