// Import Mongoose for MongoDB schema creation and interaction
const mongoose = require('mongoose');

// Define the schema for contact form submissions
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },  // Name is required
  email: { type: String, required: true }, // Email is required
  phone: String,                           // Optional phone number
  message: String,                         // Optional message content
  createdAt: { type: Date, default: Date.now }  // Automatically set timestamp when entry is created
});

// Export the model to be used in other parts of the app
module.exports = mongoose.model('Contact', contactSchema);
