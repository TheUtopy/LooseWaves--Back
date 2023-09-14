const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: false,
    },
    //photo: {
    //type: Image,
    //required: false,
    //},
    bio: {
        type: String,
        required: false,
    },
    surfLevel: {
        type: Number,
        required: false,
    },
});

const userModel = mongoose.model('users', userSchema);
module.exports = userModel;