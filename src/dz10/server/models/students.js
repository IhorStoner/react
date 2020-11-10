const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const secret = 'secret';
const SALT_FACTOR = 10;

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
    set: rawPassword => bcrypt.hashSync(rawPassword, SALT_FACTOR)
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

StudentSchema.methods.signin = function (password) {
  return bcrypt.compare(password, this.password).then(result => {
    if(result) {
      return jwt.sign({ _id: this._id }, secret);
    }
  })
}

StudentSchema.statics.verifyToken = function (token) {
  return new Promise((res, rej) => {
    jwt.verify(token, secret, function(err, decoded) {
      if (err) return rej(err);
      return res(decoded);
    });
  })
};

const StudentModel = mongoose.model('student', StudentSchema);

module.exports = StudentModel;

