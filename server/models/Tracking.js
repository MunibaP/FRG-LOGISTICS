const mongoose = require('mongoose');

const trackingSchema = new mongoose.Schema({
  trackingNumber: { type: String, required: true, unique: true },
  status: { type: String, required: true },  //  'In Transit', 'Delivered'
  estimatedDelivery: { type: Date },         // optional estimated delivery date
  deliveredAt: { type: Date },
  updatedAt: { type: Date, default: Date.now },  // last status update time
});

module.exports = mongoose.model('Tracking', trackingSchema);
