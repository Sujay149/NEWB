import React from 'react';
import { useParams } from 'react-router-dom';
import './MentorDetail.css';

const MentorDetail = () => {
  const { id } = useParams();

  // Sample data for a single mentor (replace with real data fetching logic)
  const mentor = {
    id: 1,
    name: 'John Doe',
    expertise: 'AI & Machine Learning',
    bio: 'John Doe has over 10 years of experience in AI and machine learning...',
    contact: 'johndoe@example.com',
  };

  return (
    <div className="container">
      <h1 className="text-3xl font-bold mb-6">Mentor Details</h1>
      <div className="mentor-detail">
        <h2>{mentor.name}</h2>
        <p><strong>Expertise:</strong> {mentor.expertise}</p>
        <p><strong>Bio:</strong> {mentor.bio}</p>
        <p><strong>Contact:</strong> {mentor.contact}</p>
      </div>
    </div>
  );
};

export default MentorDetail;
