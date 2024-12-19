const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        street: {
            type: String,
            trim: true
        },
        city: {
            type: String,
            trim: true
        },
        state: {
            type: String,
            trim: true
        },
        zip: {
            type: String,
            trim: true
        }
    },
    company: {
        type: String,
        trim: true
    },
    jobTitle: {
        type: String,
        trim: true
    },
    notes: {
        type: String,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    birthday: {
        type: Date,
        trim: true
    },
    relationship: {
        type: String,
        trim: true
    },
    partnerName: {
        type: String,
        trim: true
    },
    children: [{
        name: {
            type: String,
            trim: true
        },
        gender: {
            type: String,
            trim: true
        },
        birthday: {
            type: Date,
            trim: true
        }
    }],
    importantDates: [{
        description: {
            type: String,
            trim: true
        },
        date: {
            type: Date,
            trim: true
        }
    }]
});

const Contact = mongoose.model('Contact', contactSchema);
module.exports = Contact;