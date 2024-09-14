import React, { useState } from 'react';
import './AddMentorForm.css';

const AddMentorForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    expertise: '',
    bio: '',
    contact: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('New mentor data submitted:', formData);
  };

  return (
    <div className="container">
      <h1 className="text-3xl font-bold mb-6">Add New Mentor</h1>
      <form onSubmit={handleSubmit} className="add-mentor-form">
        <div className="mb-4">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="expertise">Expertise</label>
          <input
            type="text"
            name="expertise"
            id="expertise"
            value={formData.expertise}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="bio">Bio</label>
          <textarea
            name="bio"
            id="bio"
            value={formData.bio}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="contact">Contact Email</label>
          <input
            type="email"
            name="contact"
            id="contact"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddMentorForm;
