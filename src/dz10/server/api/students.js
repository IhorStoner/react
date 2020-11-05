const { Router } = require('express');
require('express-async-errors')
const studentValidator = require('../middlewares/studentValidator');
const StudentModel = require('../models/students')
const studentsRouter = Router();

//get all students
studentsRouter.get('/', async (req,res) => {
  const students = await StudentModel.find({});
  res.json(students)
})

// add new student
studentsRouter.post('/', studentValidator, async(req,res) => {
    const newStudent = new StudentModel(req.body);
    const { _id } = await newStudent.save();
    res.status(201).send(newStudent);
  })

// getStudentById
studentsRouter.get('/:studentId', async (req,res) => {
    const selectedStudent = await StudentModel.findById(req.params.studentId);

    if(!selectedStudent) {
      res.status(400).send({ error: 'Student not found' });
      return
    } else {
      res.status(200).send(selectedStudent);
    }
})

//changeStudentById
studentsRouter.put('/:studentId',studentValidator, async (req,res) => {
  const updateStudent = await StudentModel.findByIdAndUpdate(req.params.studentId, req.body)
  res.status(200).send(updateStudent)
})

//deleteStudentById
studentsRouter.delete('/:studentId', async (req,res) => {
  const deletedStudent = await StudentModel.findByIdAndDelete(req.params.studentId)
  res.status(200).send(deletedStudent)
})

module.exports = studentsRouter;