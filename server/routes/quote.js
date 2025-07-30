// Import required modules
const express = require('express');
const router = express.Router();

const Quote = require('../models/Quote'); // Mongoose model for quote requests
// const quoteForm = require('../seeds/quote');
const { body, validationResult } = require('express-validator'); // Middleware for validating request fields

// Route: POST /api/quote
// Description: Handle quote form submissions
router.post('/',
  [
    // Validation rules for required fields
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('phone').notEmpty().withMessage('Phone Number is required'),
    body('serviceType').notEmpty().withMessage('Please select a service'),
    body('DeliveryDetails').notEmpty().withMessage('Delivery Details are required')
  ],
  
  async (req, res) => {
    // Check if any validation errors occurred
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // Return 400 Bad Request with validation errors
      return res.status(400).json({ errors: errors.array() });
    }
    
    try {
      // Create a new Quote document from submitted data
      const newQuote = new Quote(req.body);
      await newQuote.save();  // Save the quote to the database
      res.status(201).json({ message: 'Quote saved successfully' }); // Respond with a success message
    } catch (err) {
      res.status(500).json({ error: 'Failed to save quote' }); // Handle server or database errors
    }
  }
);

// Export the router to be used in the main server setup
module.exports = router;
