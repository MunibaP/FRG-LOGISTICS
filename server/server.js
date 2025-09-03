// Load environment variables from .env file
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

// Sitemap dependencies
const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

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

// Add Sitemap Route Here
app.get('/sitemap.xml', async (req, res) => {
  try {
    const links = [
      { url: '/', changefreq: 'daily', priority: 1.0 },
      { url: '/about', changefreq: 'weekly', priority: 0.8 },
      { url: '/services', changefreq: 'weekly', priority: 0.8 },
      { url: '/contact', changefreq: 'monthly', priority: 0.7 },
      { url: '/track', changefreq: 'weekly', priority: 0.8 },
    ];

    const stream = new SitemapStream({ hostname: 'https://frglogistics.com' });
    res.writeHead(200, { 'Content-Type': 'application/xml' });
    const xml = await streamToPromise(Readable.from(links).pipe(stream));
    res.end(xml.toString());
  } catch (e) {
    console.error(e);
    res.status(500).end();
  }
});

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
