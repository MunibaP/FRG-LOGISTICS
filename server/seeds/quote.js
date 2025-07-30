const Quote = require('../models/Quote');

async function seedQuote() {
  await Quote.create([
    {
      "name": 'Alice Johnson',
      "company": 'Fast Logistics Ltd.',
      "email": 'alice.johnson@example.com',
      "phone": '(647) 555-6789',
      "serviceType": 'Same-Day Delivery',
      "DeliveryDetails": 'Pickup from 100 King St, deliver to 200 Queen St.',
    },
    {
      "name": 'Bob Smith',
      "company": 'Smith Retailers',
      "email": 'bob.smith@example.com',
      "phone": '555-123-4567',
      "serviceType": 'Scheduled & Recurring',
      "DeliveryDetails": 'Weekly delivery of retail goods to 50 Market Ave.',
    },
  ]);

  console.log('✅ Quotes seeded');
 
};

module.exports = seedQuote;
