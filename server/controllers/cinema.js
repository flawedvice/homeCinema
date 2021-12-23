

exports.GET_ACCOUNT = (req, res) => {
    res.send("Got your account!");
}

exports.GET_WISHLIST = (req, res) => {
    res.send("Got your wishlist!");
}

exports.GET_WATCHED = (req, res) => {
    res.send("Got your watched list!");
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
