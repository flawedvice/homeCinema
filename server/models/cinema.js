const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    watchedMovies: [{}],
    wishlist: [{}]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
