const { Router } = require('express');
const fs = require('fs');
const studentValidator = require('../middlewares/studentValidator')
const studentsRouter = Router();

//get all students
studentsRouter
  .get('/', (req,res) => {
    const students = JSON.parse(fs.readFileSync(`${__dirname}/students.json`));
    res.json(students)
  })
  .post('/', studentValidator,(req,res) => {
    const newStudent = req.body;
    const students = JSON.parse(fs.readFileSync(`${__dirname}/students.json`));

    if(students.some(student => student.phonenumber === newStudent.phonenumber)) {
      return res.status(400).send({
        error: 'Student is exist!'
      })
    }

    newStudent.id = Date.now();
    students.push(newStudent);
    fs.writeFileSync(`${__dirname}/students.json`, JSON.stringify(students));
    res.status(201).send('New student add');
  })

// getById
studentsRouter.get('/:studentId', (req,res) => {
    const studentId = Number(req.params.studentId);
    const students = JSON.parse(fs.readFileSync(`${__dirname}/students.json`));

    const selectedStudent = students.find(student => student.id === studentId);
    if(!selectedStudent) {
      res.status(400).send({ error: 'Student not found' });
      return
    } else {
      res.status(200).send(selectedStudent);
    }
  })

module.exports = studentsRouter;