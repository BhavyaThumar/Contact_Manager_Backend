const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please add the username"],
    },

    email: {
        type: String,
        required: [true, "Please add the contact email address"],
        unique: [true, "Email address is already Registered"]
    },
    password: {
        type: String,
        required: [true, "Please add other Password"]
    },
},
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("User", userSchema);