const { Router } = require('express');
const students = require('./students');
const signUpRouter = require('./singup')
const apiRouter = Router();

apiRouter.use('/students', students);
apiRouter.use('/singup', signUpRouter);

module.exports = apiRouter;