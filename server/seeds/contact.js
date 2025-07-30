// seeds for contact page
const Contact = require('../models/Contact');

async function seedContact() {
  await Contact.create([
    {
      "name": "Sarah John",
      "email": "sarahJohn@example.com",
      "phone": "+14165551234",
      "message": "Hello! I am interested in your logistics service."
    },
    {
      "name": "Jason Lee",
      "email": "jason.lee89@gmail.com",
      "phone": "+14165551234",
      "message": "Hi, I'm looking for a recurring delivery solution for my business in the GTA. Please get in touch!"
    },
  ]);
  console.log('✅ Contact seeded');
}

module.exports = seedContact;
