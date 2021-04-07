const express = require('express');
const contactController = require('../controllers/contactDetailsController');

const router = express.Router();

router.route('/').get(contactController.getAllContacts).post(contactController.createContact);

router.route('/:id').get(contactController.getContact).delete(contactController.deleteContact);

module.exports = router;
