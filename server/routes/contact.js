// Import required modules
const express = require('express');
const router = express.Router();

const Contact = require('../models/Contact');  // Mongoose model for saving contact form data
// const contactForm = require('../seeds/contact');
const { body, validationResult } = require('express-validator');  // Used for request validation

// Route: POST /api/contact
// Description: Handle form submissions
router.post('/', 
  [
    // Validation rules for incoming form fields
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('phone').optional().isMobilePhone('any').withMessage('Invalid phone number'),
    body('message').notEmpty().withMessage('Message is required'),
  ],

  async (req, res) => {
    // Check if any validation errors occurred
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // Return 400 with validation error messages
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // Create a new Contact document with submitted data
      const newContact = new Contact(req.body);
      await newContact.save(); // Save the contact entry to the database
      res.status(201).json({ message: 'Form submitted successfully!' });  // Respond with success message
    } catch (err) {
      res.status(500).json({ error: 'Failed to save contact' });   // Return 500 if something goes wrong while saving
    }
  }
);

// Export the router to be used in the main server file
module.exports = router;
