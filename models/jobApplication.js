const mongoose = require('mongoose');

const jobApplySchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'An applicant must have a name'],
    maxlength: [200, 'An applicant must be less than 200 characters'],
  },
  email: {
    type: String,
    required: [true, 'An applicant must have an email'],
  },
  contactNo: {
    type: Number,
    default: null,
  },
  resumeUrl: {
    type: String,
    require: [true, 'An applicant must have a resume...'],
  },
  applyDate: {
    type: Date,
    default: Date.now,
  },
  refId: {
    type: mongoose.Schema.ObjectId,
    ref: 'jobSpec',
  },
});

const JobApplication = mongoose.model('candidates', jobApplySchema);

module.exports = JobApplication;
