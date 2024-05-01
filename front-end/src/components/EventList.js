import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Define a function to fetch events
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/show-all-events'); // Replace with your API endpoint
        setEvents(response.data); // Set the fetched events in state
      } catch (error) {
        console.error('Error fetching events:', error);
        // Handle error, like showing an error message to the user
      }
    };

    // Call the function to fetch events when the component mounts
    fetchEvents();
  }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount

  return (
    <div>
      <h2>Events</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <strong>{event.title}</strong> - {event.description} ({event.place}) - {event.dateandtime}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
