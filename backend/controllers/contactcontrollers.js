const express = require('express');
const Contact = require('../models/contact'); // Assuming you have a Contact model

const router = express.Router();

// Create a new contact
router.post('/contacts', async (req, res) => {
    try {
        const newContact = new Contact(req.body);
        const savedContact = await newContact.save();
        res.status(201).json(savedContact);
    } catch (error) {
        res.status(400).json({ error: 'Error creating contact' });
    }
});

// Read all contacts
router.get('/contacts', async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(400).json({ error: 'Error fetching contacts' });
    }
});

// Read a single contact by ID
router.get('/contacts/:id', async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (contact) {
            res.status(200).json(contact);
        } else {
            res.status(404).json({ error: 'Contact not found' });
        }
    } catch (error) {
        res.status(400).json({ error: 'Error fetching contact' });
    }
});

// Update a contact by ID
router.patch('/contacts/:id', async (req, res) => {
    try {
        const updatedContact = await Contact.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (updatedContact) {
            res.status(200).json(updatedContact);
        } else {
            res.status(404).json({ error: 'Contact not found' });
        }
    } catch (error) {
        res.status(400).json({ error: 'Error updating contact' });
    }
});

// Delete a contact by ID
router.delete('/contacts/:id', async (req, res) => {
    try {
        const deletedContact = await Contact.findByIdAndDelete(req.params.id);
        if (deletedContact) {
            res.status(200).json({ message: 'Contact deleted' });
        } else {
            res.status(404).json({ error: 'Contact not found' });
        }
    } catch (error) {
        res.status(400).json({ error: 'Error deleting contact' });
    }
});

module.exports = router;
