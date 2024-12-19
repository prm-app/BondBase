const express = require('express');
const contactController = require('../controllers/contactController');

const router = express.Router();

router.post('/contacts', contactController.createContact);
router.get('/contacts', contactController.getAllContacts);
router.get('/contacts/:id', contactController.getContactById);
router.put('/contacts/:id', contactController.updateContact);
router.delete('/contacts/:id', contactController.deleteContact);

module.exports = router;