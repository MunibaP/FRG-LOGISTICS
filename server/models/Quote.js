const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  company: String,
  phone: String,
  serviceType: {
    type: String,
    enum: ['Same-Day Delivery', 'Scheduled & Recurring', 'Medical Delivery', 'E-Commerce Parcel', 'Retail & B2B', 'Warehousing & Sorting'],
    required: true,
  },

  DeliveryDetails: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Quote', quoteSchema);
