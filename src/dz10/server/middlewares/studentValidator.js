module.exports = (req, res, next) => {
  const student = req.body;

  if (student.name && student.group && student.phonenumber) {
    return next();
  };
  res.status(400).send({
    error: 'Missing requied arguments'
  })
}