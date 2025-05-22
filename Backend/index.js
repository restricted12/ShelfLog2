const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('./config/db'); // Your custom DB connection file
const bookRoutes = require('./routes/Book.route'); // Import your book routes

// Load .env variables
dotenv.config();

// Create express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // For parsing JSON

// Routes
app.use('/api', bookRoutes); // Mount the book routes

// Root route
app.get('/', (req, res) => {
  res.send('📚 ShelfLog API is up and running!');
});

// Export as a serverless function for Vercel
module.exports = async (req, res) => {
  try {
    // Ensure MongoDB connection is ready
    const db = mongoose.connection;
    if (db.readyState !== 1) {
      await new Promise((resolve, reject) => {
        db.once('open', resolve);
        db.once('error', reject);
        if (db.readyState === 0) {
          mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 15000,
          }).catch(reject);
        }
      });
    }
    console.log('MongoDB connected, handling request:', req.method, req.url); // Debug log
    return app(req, res);
  } catch (error) {
    console.error('Serverless function error:', error.message);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
};
