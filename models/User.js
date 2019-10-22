const mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    display_name: {
        type: String,
        required: true
    },
    at: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    tweets: {
        type: [String] // this stores the id of each tweet
    },
    followers: {
        type: [String]
    },
    following: {
        type: [String]
    }
//    isValid: {
//        type: Boolean,
//        default: false
//    }
});

module.exports = mongoose.model('Users', UserSchema);
