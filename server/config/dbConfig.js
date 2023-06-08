const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL);

const connection = mongoose.connection;

connection.on('connected', () => {
    console.log('DB connected');
});

connection.on('error', () => {
    console.log('Error on DB connection');
});

module.exports = mongoose;
