const StudentModel = require('../models/students');

module.exports = async (req, res, next) => {
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
  try {
    const result = await StudentModel.verifyToken(token);
    req.currentStudent = await StudentModel.findById(result._id);
    next()
  } catch (err) {
    res.status(401).send({ error: err.message })
  }
};