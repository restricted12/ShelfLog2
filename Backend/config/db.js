const mongoose = require('mongoose');

const mongoURL = process.env.MONGO_URL || 'mongodb+srv://ezepayooner:32354505@cluster0.dwv8uae.mongodb.net/shelflog?retryWrites=true&w=majority';

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 15000,
  socketTimeoutMS: 60000,
  maxPoolSize: 10,
  minPoolSize: 2,
  bufferCommands: false,
  autoIndex: false,
  connectTimeoutMS: 15000,
  heartbeatFrequencyMS: 10000,
  retryWrites: true,
};

mongoose.connect(mongoURL, options);

const db = mongoose.connection;
db.on('error', (error) => console.error('MongoDB connection error:', error.message));
db.on('disconnected', () => console.warn('MongoDB disconnected. Attempting to reconnect...'));
db.once('open', () => console.log('MongoDB connection is open at', new Date().toLocaleString('en-US', { timeZone: 'Africa/Nairobi' })));

module.exports = mongoose;