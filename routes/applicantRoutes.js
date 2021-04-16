const express = require('express');
const jobController = require('../controllers/jobApplication');
const authController = require('../controllers/authController');


const router = express.Router();

router.route('/').post(jobController.candidateResume, jobController.applyJob);

router.route('/:id').get(authController.protect, jobController.getCandidate);

module.exports = router;
