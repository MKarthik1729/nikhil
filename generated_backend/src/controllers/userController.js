// Import the User model defined earlier
const User = require('../models/userModel');

// Function to create a new user
async function createUser(fullname, email, password, phone) {
    try {
        const newUser = new User({
            fullname,
            email,
            password,
            phone
        });
        const savedUser = await newUser.save();
        return savedUser;
    } catch (error) {
        throw new Error(`Error creating user: ${error.message}`);
    }
}

// Function to check if a user exists by email and password
async function checkUserExistByEmailAndPassword(email, password) {
    try {
        const user = await User.findOne({ email, password });
        return user ? true : false;
    } catch (error) {
        throw new Error(`Error checking user existence: ${error.message}`);
    }
}

module.exports = {
    createUser,
    checkUserExistByEmailAndPassword
};
