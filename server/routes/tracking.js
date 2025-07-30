// Import required modules
const express = require('express');
const router = express.Router();

const Tracking =  require('../models/Tracking'); // Mongoose model for tracking data
const { param, validationResult } = require('express-validator'); // Middleware for validating request parameters
const mongoose = require('mongoose'); 

// Route: GET /:trackingNumber
// Description: Fetch tracking info based on a valid tracking number
router.get('/:trackingNumber',
    [
        // Validate the trackingNumber parameter
        // Must match format: FRG followed by exactly 5 digits (e.g., FRG12345)
        param('trackingNumber')
        .matches(/^FRG\d{5}$/)
        .withMessage('Tracking number must start with "FRG" followed by 5 digits'),
    ],

    async (req, res) => {
        // Handle validation errors (if any)
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });  // Return 400 Bad Request with validation details
        }

        try {
            // Query the database for the matching tracking number
            const trackingInfo = await Tracking.findOne({ trackingNumber: req.params.trackingNumber });

            if (!trackingInfo) {
                // If no tracking info found, return 404 Not Found
                return res.status(404).json({ error: 'Tracking number not found' });
            }

            // If found, return the tracking info as JSON
            res.json(trackingInfo);
        } catch (err) {
            // Handle any unexpected server/database errors
            console.error('Tracking route error:', err);
            res.status(500).json({error: 'Server error'});
        }
    }
);

// Export the router to be used in main server file
module.exports = router;