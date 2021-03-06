const { Router } = require('express');
const StudentModel = require('../models/students');

const signUpRouter = Router();

signUpRouter.post('/', async (req, res) => {
  const student = new StudentModel(req.body);
  try {
    const result = await student.save();
    res.status(201).send({ created_user_id: result._id });
  } catch (e) {
    res.status(500).send({ error: 'Error:' + e });
  }
});

signUpRouter.get('/is_exist', async (req, res) => {
  const result = await StudentModel.exists({ email: req.query.email });
  res.send({ is_exist: result })
});

module.exports = signUpRouter;