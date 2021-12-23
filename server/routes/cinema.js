const express = require('express');
const router = express.Router();

// Import controllers
const {
    GET_ACCOUNT,
    GET_WISHLIST,
    GET_WATCHED,
    POST_LOGIN,
    POST_REGISTER,
    POST_ADD_WATCHED,
    POST_ADD_WISHLIST,
    DELETE_REMOVE_WATCHED,
    DELETE_REMOVE_WISHLIST,
    DELETE_ACCOUNT
} = require('../controllers/cinema');


/**
*   Method:     GET
*   Endpoint:   /:username/account
*   Objective:  Retrieve account config info from db.
**/
router.get("/:username/account", GET_ACCOUNT);


/**
*   Method:     GET
*   Endpoint:   /:username/wishlist
*   Objective:  Retrieve user's wishlist from db.
**/
router.get("/:username/wishlist", GET_WISHLIST);


/**
*   Method:     GET
*   Endpoint:   /:username/watched
*   Objective:  Retrieve user's watched movies from db.
**/
router.get("/:username/watched", GET_WATCHED);


/**
*   Method:     POST
*   Endpoint:   /login
*   Objective:  Logins user.
**/
router.post("/login", POST_LOGIN);


/**
*   Method:     POST
*   Endpoint:   /register
*   Objective:  Registers user into db.
**/
router.post("/register", POST_REGISTER);


/**
*   Method:     POST
*   Endpoint:   /:username/add-watched/:movie_id
*   Objective:  Adds watched movie into user's watched list.
**/
router.post("/:username/add-watched/:movie_id", POST_ADD_WATCHED);


/**
*   Method:     POST
*   Endpoint:   /:username/add-wishlist/:movie_id
*   Objective:  Adds movie into user's wishlist.
**/
router.post("/:username/add-wishlist/:movie_id", POST_ADD_WISHLIST);


/**
*   Method:     DELETE
*   Endpoint:   /:username/remove-watched/:movie_id
*   Objective:  Removes movie from user's watched list.
**/
router.delete("/:username/remove-watched/:movie_id", DELETE_REMOVE_WATCHED);


/**
*   Method:     DELETE
*   Endpoint:   /:username/remove-wishlist/:movie_id
*   Objective:  Removes movie from user's wishlist.
**/
router.delete("/:username/remove-wishlist/:movie_id", DELETE_REMOVE_WISHLIST);


/**
*   Method:     DELETE
*   Endpoint:   /:username/delete-account
*   Objective:  Deletes user's account.
**/
router.delete("/:username/delete-account", DELETE_ACCOUNT);


module.exports = router;
