// Import the Event model
const Event = require('../models/eventModel');

// Function to create a new event
async function createEvent(title, description, place, dateandtime) {
    try {
        const newEvent = new Event({
            title,
            description,
            place,
            dateandtime
        });
        const savedEvent = await newEvent.save();
        return savedEvent;
    } catch (error) {
        throw new Error(`Error creating event: ${error.message}`);
    }
}

// Function to retrieve all events
async function showAllEvents() {
    try {
        const events = await Event.find();
        return events;
    } catch (error) {
        throw new Error(`Error retrieving events: ${error.message}`);
    }
}

module.exports = {
    createEvent,
    showAllEvents
};
