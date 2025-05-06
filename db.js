const mongoose = require('mongoose');
require('dotenv').config();

// define the mongodb connection url
// const mongoURL = process.env.MONGODB_URL_LOCAL; // Replace hotel with your database name
const mongoURL= process.env.MONGODB_URL;
// set up MongoDB connection

mongoose.connect(mongoURL);
    // useNewUrlParser:true,
    // useUnifiedTopology:true


// get the default connection
// Mongoose maintains a default connection object representing the MongoDB connection.

const db= mongoose.connection;

// define event listeners for database connection

db.on('connected',()=>{
    console.log('connected to MongoDB server');
});

db.on('error',(err)=>{
    console.log('connected to MongoDB server',err.message);
});

db.on('disconnected',()=>{
    console.log('MongoDB disconnectd');
});

db.on('close', () => {
    console.log('MongoDB connection closed — maybe the server stopped');
});

// show connection status every 5 seconds
/*setInterval(() => {
    const states = ['Disconnected', 'Connected', 'Connecting', 'Disconnecting'];
    console.log('Connection state:', states[mongoose.connection.readyState]);
}, 5000);
*/

// Export the database connection
module.exports = db;



