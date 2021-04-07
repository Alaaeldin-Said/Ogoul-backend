const express = require('express');
const jobController = require('../controllers/jobSpecController');

const router = express.Router();

// Routes to Create and Retrive a Job
router.route('/').get(jobController.getAllJobs).post(jobController.createJob);

// Route to Fetch, Update and Delete a Job
router.route('/:id').get(jobController.getJob).patch(jobController.updateJob).delete(jobController.deleteJob);

module.exports = router;
