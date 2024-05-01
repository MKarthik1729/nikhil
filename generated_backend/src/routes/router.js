const express = require('express');
const router = express.Router();
const { createUser, checkUserExistByEmailAndPassword } = require('../controllers/userController');
const { createEvent, showAllEvents } = require('../controllers/eventController');
// Route to create a new user
router.post('/create-user', async (req, res) => {
    const { fullname, email, password, phone } = req.body;
    try {
        const newUser = await createUser(fullname, email, password, phone);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Route to check if a user exists by email and password
router.post('/check-user', async (req, res) => {
    const { email, password } = req.body;
    try {
        const userExists = await checkUserExistByEmailAndPassword(email, password);
        res.json({ exists: userExists });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


// Route to create a new event
router.post('/create-event', async (req, res) => {
    const { title, description, place, dateandtime } = req.body;
    try {
        const newEvent = await createEvent(title, description, place, dateandtime);
        res.status(201).json(newEvent);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Route to retrieve all events
router.get('/show-all-events', async (req, res) => {
    try {
        const events = await showAllEvents();
        res.json(events);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
