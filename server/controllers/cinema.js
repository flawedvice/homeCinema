const User = require('../models/cinema');


exports.GET_ACCOUNT = (req, res) => {
    const username = req.params.username;
    res.send(`Username: ${username}`)
}

exports.GET_WISHLIST = async (req, res) => {
    const username = req.params.username;
    const user = await User.findOne({ username: username}).exec();
    let wishlist;
    try {
        wishlist = user.wishlist;
    } catch (e) {
        console.log(e.message);
        wishlist = [];
    } finally {
        res.send(wishlist);
    }
}

exports.GET_WATCHED = async (req, res) => {
    const username = req.params.username;
    const user = await User.findOne({ username: username}).exec();
    let watchedMovies;
    try {
        watchedMovies = user.watchedMovies;
    } catch (e) {
        console.log(e.message);
        watchedMovies = [];
    } finally {
        res.send(watchedMovies);
    }
}



exports.POST_LOGIN = (req, res) => {
    res.send("Login!");
}

exports.POST_REGISTER = (req, res) => {
    res.send("Register!");
}

exports.POST_ADD_WATCHED = (req, res) => {
    res.send("Added to watched!");
}

exports.POST_ADD_WISHLIST = (req, res) => {
    res.send("Added to wishlist!");
}



exports.DELETE_REMOVE_WATCHED = (req, res) => {
    res.send("Removed from watched!");
}

exports.DELETE_REMOVE_WISHLIST = (req, res) => {
    res.send("Removed from wishlist!");
}

exports.DELETE_ACCOUNT = (req, res) => {
    res.send("Deleted account!");
}
