const mongoose = require('mongoose');
const slugify = require('slugify');

const jobSpecSchema = new mongoose.Schema({
  title: {
    type: String,
    require: [true, 'a Job must have a Title'],
    maxlength: [170, 'A Job title must be less than 171 characters!'],
    trim: true,
  },
  briefDescription: {
    type: String,
    maxlength: [40, 'a brief description should be less than 40 characters'],
  },
  description: {
    type: String,
    require: [true, 'A Job must have a description'],
    trim: true,
  },
  education: {
    type: String,
    require: [true, 'A job must have a education required field'],
    maxlength: [170, 'A job must be less than 171 characters!'],
  },
  postingDate: {
    type: Date,
    default: Date.now,
  },
  endingDate: {
    type: Date,
    default: null,
  },
  additionalDetails: {
    type: String,
    trim: true,
  },
  openings: {
    type: Number,
    default: 1,
  },
  type: {
    type: String,
    require: [true, 'A job position must have a Job Type.'],
  },
  group: {
    type: String,
    enum: ['humanResources', 'customerSupport', 'webMobileDevelopment', 'businessDevelopment', 'salesMarketing'],
    require: [true, 'A job must have a group defined!'],
  },
  slug: String,
});

//Document middlewares...
// 1) To Create a SLUG
jobSpecSchema.pre('save', function (next) {
  this.slug = slugify(this.title, { lower: true });
  next();
});

const Job = mongoose.model('jobs', jobSpecSchema);

module.exports = Job;
