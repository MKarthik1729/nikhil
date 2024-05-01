import React, { useState } from 'react';
import axios from 'axios';

const EventForm = ({setEvent}) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    place: '',
    dateandtime: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/create-event', formData)
      .then((e)=>{setEvent(false)})
      console.log('Event created:', response.data);

    } catch (error) {
      console.error('Error creating event:', error);
      // Handle error, like showing an error message to the user
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="place">Place:</label>
        <input
          type="text"
          id="place"
          name="place"
          value={formData.place}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="dateandtime">Date and Time:</label>
        <input
          type="datetime-local"
          id="dateandtime"
          name="dateandtime"
          value={formData.dateandtime}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Create Event</button>
    </form>
  );
};

export default EventForm;
