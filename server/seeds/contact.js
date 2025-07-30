// Import the Contact model
const Contact = require('../models/Contact');

// Seed function to insert sample contact form entries into the database
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
  // Log success message once seeding is complete
  console.log('✅ Contact seeded');
}

// Export the seeding function so it can be called externally
module.exports = seedContact;
