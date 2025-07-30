// Load environment variables from .env file
require('dotenv').config();
const mongoose = require('mongoose'); // Import dependencies
const Tracking = require('../models/Tracking'); // Mongoose model for the tracking collection

// Sample tracking data to insert into the database
const trackingData = {
  'FRG12345': { status: 'Out for delivery', estimatedDelivery: new Date('2025-07-22') },
  'FRG67890': { status: 'Delivered', estimatedDelivery: new Date('2025-07-18') },
};

// Convert trackingData object into an array of objects suitable for MongoDB insertion
const seedData = Object.entries(trackingData).map(([trackingNumber, info]) => ({
  trackingNumber,
  ...info,
}));

// Async function to seed the database
async function seed() {
  try {
    // Connect to MongoDB using the URI from .env
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('✅ Connected to MongoDB');

    await Tracking.deleteMany();  // Clear existing tracking records (if any)
    await Tracking.insertMany(seedData);  // Insert the new tracking data
    console.log('✅ Tracking data seeded');

    // Disconnect from MongoDB after seeding
    await mongoose.disconnect();
    console.log('✅ Disconnected from MongoDB');
  } catch (err) {
    // Log and exit if there's an error during seeding
    console.error('❌ Seeding failed:', err);
    process.exit(1);
  }
}

// Export the seed function so it can be called from another script
module.exports = seed;
