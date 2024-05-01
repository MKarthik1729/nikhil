const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    dateandtime: {
        type: String,
        required: true
    }
});

const User = mongoose.model('Event', userSchema);

module.exports = User;
