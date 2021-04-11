const express = require('express');
const jobController = require('../controllers/jobSpecController');
const authController = require('../controllers/authController');

const router = express.Router();

// Routes to Create and Retrive a Job
router
  .route('/')
  .get(jobController.getAllJobs)
  .post(authController.protect, authController.restrictTo('admin'), jobController.createJob);

// Route to Fetch, Update and Delete a Job
router
  .route('/:id')
  .get(jobController.getJob)
  .patch(authController.protect, authController.restrictTo('admin'), jobController.updateJob)
  .delete(authController.protect, authController.restrictTo('admin'), jobController.deleteJob);

module.exports = router;
