import React from 'react';
import { Link } from 'react-router-dom';
import './MentorList.css';

const MentorList = () => {
  // Sample data for mentors
  const mentors = [
    { id: 1, name: 'John Doe', expertise: 'AI & Machine Learning' },
    { id: 2, name: 'Jane Smith', expertise: 'Data Science' },
    // Add more mentor profiles here
  ];

  return (
    <div className="container">
      <h1 className="text-3xl font-bold mb-6">Mentor Profiles</h1>
      <div className="mentor-list">
        {mentors.map((mentor) => (
          <div key={mentor.id} className="mentor-card">
            <h2>{mentor.name}</h2>
            <p>{mentor.expertise}</p>
            <Link to={`/mentors/${mentor.id}`} className="view-details-btn">View Details</Link>
          </div>
        ))}
      </div>
      <Link to="/add-mentor" className="add-mentor-btn">Add New Mentor</Link>
    </div>
  );
};

export default MentorList;
