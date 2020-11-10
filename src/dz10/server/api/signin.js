const { Router } = require('express');
const StudentModel = require('../models/students');

const signInRouter = Router();


signInRouter.post('/', async (req,res) => {
  const { email, password } = req.body;

  const student = await StudentModel.findOne({ email }, '+password')
  if(!student){
    return res.status(401).send({error: 'User is not found'})
  }

  const token = await student.signin(password)
  if(token) {
    res.status(200).send({id: student.id, token})
  } else {
    res.status(401).send({error: 'Password is not correct'})
  }
})

module.exports = signInRouter;