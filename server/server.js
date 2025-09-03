// Load environment variables from .env file
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS)
app.use(express.json()); // Middleware to parse JSON request bodies

// Serve static files from React frontend build directory
app.use(express.static(path.join(__dirname, '../client/dist')));

// Import and mount API routes under /api
const routes = require('./routes'); // import routes
app.use('/api', routes);
// const formRoutes = require('./routes/forms');
// app.use('/api', formRoutes);

// Fallback: For any other routes, serve React's index.html (for client-side routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

// Connect to MongoDB using connection string from environment variables
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));


// Start the Express server on specified port or default 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
