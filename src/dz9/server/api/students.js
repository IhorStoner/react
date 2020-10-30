const { Router } = require('express');
const fs = require('fs');
const studentValidator = require('../middlewares/studentValidator')
const studentsRouter = Router();

//get all students
studentsRouter.get('/', (req,res) => {
  const students = JSON.parse(fs.readFileSync(`${__dirname}/students.json`));
  res.json(students)
})

// add new student
studentsRouter.post('/', studentValidator,(req,res) => {
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

// getStudentById
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

//changeStudentById
studentsRouter.put('/:studentId',studentValidator, (req,res) => {
  const newStudentData = req.body;
  const studentId = Number(req.params.studentId);
  const students = JSON.parse(fs.readFileSync(`${__dirname}/students.json`));
  const updatedStudents = students.map(student => student.id === studentId ? { id: studentId, ...newStudentData } : student);
  fs.writeFileSync(`${__dirname}/students.json`, JSON.stringify(updatedStudents));
  res.status(200).send('Student updated')
})

//deleteStudentById
studentsRouter.delete('/:studentId', (req,res) => {
  const studentId = Number(req.params.studentId);
  const students = JSON.parse(fs.readFileSync(`${__dirname}/students.json`));
  const studentIndex = students.findIndex(student => student.id === studentId);

  if(studentIndex === -1) {
    return res.status(400).send('Student not found');
  } else {
    students.splice(studentIndex,1);
    fs.writeFileSync(`${__dirname}/students.json`, JSON.stringify(students));
    return res.status(200).send('Student has been deleted')
  }
})

module.exports = studentsRouter;