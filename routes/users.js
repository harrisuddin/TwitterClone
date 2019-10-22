// Dependencies
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// get all users
router.get('/', async (req, res) => {
    try {
        var users = await User.find().select("-password -email");
        res.json(users);
    } catch (err) {
        res.json({
            message: err
        });
    }
});

// submit a user
router.post('/', async (req, res) => {

    var user = new User({
        display_name: req.body.display_name,
        at: req.body.at,
        email: req.body.email,
        password: req.body.password,
        tweets: req.body.tweets,
        followers: req.body.followers,
        following: req.body.following
    });

    try {
        var savedUser = await user.save();
        res.status(201).json(savedUser); // 201 response code means created.
    } catch (err) {
        res.status(400).json({ // 400 response code means bad request
            message: err
        });
    }
});

// get a specific user
router.get('/:userId', async (req, res) => {
    try {
        var user = await User.findById(req.params.userId).select("-password -email"); // this makes sure the email and password are not returned
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json({ // 400 response code means bad request
            message: err
        });
    }


});

// delete user
router.delete('/:userId', async (req, res) => {
    try {
        var deletedUser = await User.deleteOne({
            _id: req.params.userId
        });
        res.json(deletedUser);
    } catch (err) {
        res.status(400).json({
            message: err
        });
    }
});

// update user
router.patch('/:userId', async (req, res) => {
    try {
        var updatedUser = await User.updateOne({
            _id: req.params.userId
        }, {
            $set: {
                display_name: req.body.display_name
            }
        });
        res.json(updatedUser);
    } catch (err) {
        res.status(400).json({
            message: err
        });
    }
});

module.exports = router;
