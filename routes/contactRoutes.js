const express = require('express');
const contactController = require('../controllers/contactDetailsController');
const authController = require('../controllers/authController');

const router = express.Router();

router
  .route('/')
  .get(authController.protect, authController.restrictTo('admin'), contactController.getAllContacts)
  .post(contactController.createContact);

router
  .route('/:id')
  .get(contactController.getContact)
  .delete(authController.protect, authController.restrictTo('admin'), contactController.deleteContact);

module.exports = router;
