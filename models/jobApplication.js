const mongoose = require('mongoose');

const jobApplySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'An applicant must have a name'],
    maxlength: [200, 'An applicant must be less than 200 characters'],
  },
  email: {
    type: String,
    required: [true, 'An applicant must have an email'],
  },
  contactNumber: {
    type: Number,
    default: null,
  },
  resume: {
    type: String,
    require: [true, 'An applicant must have a resume...'],
  },
  refId: String,
});

const JobApplication = mongoose.model('candidates', jobApplySchema);

module.exports = JobApplication;
