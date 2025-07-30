const express = require('express');
const router = express.Router();

// Import individual route modules
const contactRoutes = require('./contact');
const quoteRoutes = require('./quote');
const trackingRoutes = require('./tracking');

// Mount each router on its respective path prefix
router.use('/contact', contactRoutes); // Handles /api/contact routes
router.use('/quote', quoteRoutes);     // Handles /api/quote routes
router.use('/track', trackingRoutes);   // Handles /api/track routes

// Export the combined router to be used in the main server file
module.exports = router;
