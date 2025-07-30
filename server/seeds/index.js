// Load environment variables from .env file
require('dotenv').config();
const mongoose = require('mongoose');

// Import individual seed functions
const ContactForm = require('./contact');
const GetAQuote = require('./quote');
const Tracking = require('./tracking');

// Async function to run all seeders sequentially
async function runSeeds() {
  try {
    // Connect to MongoDB using connection string from environment variables
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB for seeding");

    // Run each seed function to populate the database
    await ContactForm();
    await GetAQuote();
    await Tracking();

    // Close the MongoDB connection after seeding is done
    await mongoose.connection.close();
    console.log("✅ Seeding complete and connection closed");
  } catch (error) {
    console.error("❌ Error running seeds:", error); // Log any errors during the seeding process
  }
}

// Execute the seeding process
runSeeds();
