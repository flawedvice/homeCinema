const User = require('../models/cinema');


exports.GET_ACCOUNT = async (req, res) => {
    const username = req.params.username;
    const user = await User.findOne({ username: username});
    user ? res.send(`User: ${user}`) : res.send("User not found");
}

exports.GET_WISHLIST = async (req, res) => {
    const username = req.params.username;
    const user = await User.findOne({ username: username}).exec();
    user ? res.send(user.wishlist) : res.send("User not found");
}

exports.GET_WATCHED = async (req, res) => {
    const username = req.params.username;
    const user = await User.findOne({ username: username}).exec();
    user ? res.send(user.watchedMovies) : res.send("User not found");
}



exports.POST_LOGIN = async(req, res) => {
    const loginData = req.body;
    const user = await User.findOne({ username: loginData.username });
    if (!user) {
        res.send("There is not such user")
    }
    else {
        if (loginData.password !== user.password) {
            res.send("Wrong credentials");
        }
        else {
            res.send(`Successfully logged in! Welcome back, ${user.username}`);
        }
    }
}

exports.POST_REGISTER = async (req, res) => {
    const newUser = new User(req.body);
    await newUser.save();
    res.send(`Registered user ${newUser.username}!`);
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

exports.DELETE_ACCOUNT = async (req, res) => {
    const userData = req.body;
    const user = await User.findOne({ username: userData.username });
    if (user && userData.password === user.password) {
        await User.deleteOne({ username: userData.username });
        res.send(`Deleted ${userData.username}'s account`);
    }
    else {
        res.send("Wrong credentials");
    }
}
