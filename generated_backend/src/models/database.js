
const {
    DB_HOST,
    DB_DATABASE,
    DB_USER,
    DB_PASSWORD
} = process.env;


// db.js
const mongoose = require('mongoose');

// MongoDB connection URI
const mongoURI = 'mongodb+srv://nikhilkm20:nikhil123456@cluster0.oz4y8z6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err.message);
});

module.exports = mongoose;
