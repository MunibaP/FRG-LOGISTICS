// Import Mongoose to define and interact with the database schema
const mongoose = require('mongoose');

// Define the schema for quote requests
const quoteSchema = new mongoose.Schema({
  name: { type: String, required: true },  // Requester's name (required)
  email: { type: String, required: true }, // Requester's email (required)
  company: String,                         // Optional company name
  phone: String,                           // Optional phone number

  // Type of service requested, restricted to allowed options
  serviceType: {
    type: String,
    enum: ['Same-Day Delivery', 'Scheduled & Recurring', 'Medical Delivery', 'E-Commerce Parcel', 'Retail & B2B', 'Warehousing & Sorting'],
    required: true,
  },

  DeliveryDetails: String,  // Optional details about delivery needs
  createdAt: { type: Date, default: Date.now }   // Automatically set the submission time
});

// Export the model to be used in routes or controllers
module.exports = mongoose.model('Quote', quoteSchema);
