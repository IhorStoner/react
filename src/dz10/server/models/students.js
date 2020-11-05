const mongoose = require('mongoose');

const { Schema } = mongoose;

const StudentSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    select: false,
    // set: rawPassword => bcrypt.hashSync(rawPassword, SALT_FACTOR)
  },
  name: {
    type: String,
    required: true
  },
  group: {
    type: String,
    required: true
  },
  phonenumber: {
    type: String,
    required: true
  }
});

const StudentModel = mongoose.model('student', StudentSchema);

module.exports = StudentModel;

