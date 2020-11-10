const { Router } = require('express');
const students = require('./students');
const signUpRouter = require('./signup')
const signInRouter = require('./signin')
const apiRouter = Router();

apiRouter.use('/students', students);
apiRouter.use('/signup', signUpRouter);
apiRouter.use('/signin', signInRouter)

module.exports = apiRouter;