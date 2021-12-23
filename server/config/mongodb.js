const mongoose = require('mongoose');

db = process.env.MONGODB_URI;

const connectDB = async () => {
    await mongoose.connect(db)
        .then(console.log("Connected to Database!"))
        .catch( err => console.log(err));
}

module.exports = connectDB;
