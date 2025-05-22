const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('../config/db'); // Your custom DB connection file
const bookRoutes = require('../routes/Book.route'); // ✅ Import your book routes

// Load .env variables
dotenv.config();

// Create express app
const app = express();
const PORT = process.env.PORT || 8452;

// Middleware
app.use(cors());
app.use(express.json()); // For parsing JSON

// Routes
app.use('/api', bookRoutes); // ✅ Mount the book routes

// Root route
app.get('/', (req, res) => {
  res.send('📚 ShelfLog API is up and running!');
});

// Start server after MongoDB connection is ready
const db = mongoose.connection;
mongoose.set('bufferCommands', false);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`🚀 Server listening on http://localhost:${PORT}`);
  });
});
