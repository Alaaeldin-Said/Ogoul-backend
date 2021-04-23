const mongoose = require('mongoose');
const validator = require('mongoose-validator');

const contactSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'A contact must have a name'],
    maxlength: [171, 'A contact name must be less than 171 characters!'],
  },
  email: {
    type: String,
    required: [true, 'A contact must have an email address!'],
    unique: [true, 'Email address already exists! Please wait for the next request while we solve your query!'],
    validate: [
      validator({
        validator: 'isEmail',
        message: 'Oops... please enter valid email.',
      }),
    ],
  },
  contactNo: {
    type: Number,
    maxlength: 16,
    default: null,
  },
  subject: {
    type: String,
    required: [true, 'A contact info must contain a subject'],
    trim: true,
    defualt: null,
  },
  postingDate: {
    type: Date,
    default: Date.now,
  },
  message: {
    type: String,
    default: null,
  },
  emailSentTo: {
    type: String,
    default: 'aditya-khatwa@ogoul.com',
  },
});

const Contact = mongoose.model('ContactDetails', contactSchema);

module.exports = Contact;
