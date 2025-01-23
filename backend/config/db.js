const mongoose = require('mongoose');  // Import Mongoose for database interaction

const uri = process.env.MONGODB_URI
const connectDB = async () => {
  try {
    await mongoose.connect(uri);  // Connect to MongoDB using the provided URI
    console.log('Mongoose Connect');  // Log success message if connection succeeds
  }
  catch (error) {
    console.error(error.message);  // Log the error message if the connection fails
  }
}

module.exports = connectDB;  // Export the connectDB function to be used elsewhere in the application
