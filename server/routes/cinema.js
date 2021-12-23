const express = require('express');
const router = express.Router();

/**
*   Method:     GET
*   Endpoint:   /:username/account
*   Objective:  Retrieve account config info from db.
**/
router.get("/:username/account");


/**
*   Method:     GET
*   Endpoint:   /:username/wishlist
*   Objective:  Retrieve user's wishlist from db.
**/
router.get("/:username/wishlist");


/**
*   Method:     GET
*   Endpoint:   /:username/watched
*   Objective:  Retrieve user's watched movies from db.
**/
router.get("/:username/watched");


/**
*   Method:     POST
*   Endpoint:   /login
*   Objective:  Logins user.
**/
router.post("/login");


/**
*   Method:     POST
*   Endpoint:   /register
*   Objective:  Registers user into db.
**/
router.post("/register");


/**
*   Method:     POST
*   Endpoint:   /:username/just-watched/:movie_id
*   Objective:  Adds watched movie into user's watched list.
**/
router.post("/:username/just-watched/:movie_id");


/**
*   Method:     POST
*   Endpoint:   /:username/add-wishlist/:movie_id
*   Objective:  Adds movie into user's wishlist.
**/
router.post("/:username/add-wishlist/:movie_id");


/**
*   Method:     DELETE
*   Endpoint:   /:username/remove-watched/:movie_id
*   Objective:  Removes movie from user's watched list.
**/
router.delete("/:username/remove-watched/:movie_id");


/**
*   Method:     DELETE
*   Endpoint:   /:username/remove-wishlist/:movie_id
*   Objective:  Removes movie from user's wishlist.
**/
router.delete("/:username/remove-wishlist/:movie_id");


/**
*   Method:     DELETE
*   Endpoint:   /:username/delete-account
*   Objective:  Deletes user's account.
**/
router.delete("/:username/delete-account");


module.exports = router;
