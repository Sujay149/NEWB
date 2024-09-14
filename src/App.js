import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import AddResearchesPage from './AddResearchesPage';
import IPRPage from './IPRPage';
import InnovationPage from './InnovationForm';
import StartupsPage from './StartupsPage';
import FundsPage from './FundsPage';
import SupportPage from './SupportPage';
import Navbar from './Navbar';
import ResearchProjects from './ResearchProjects';  // import the component
import MentorList from './MentorList';
import MentorDetail from './MentorDetail';
import AddMentorForm from './AddMentorForm';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/researches" element={<AddResearchesPage />} />
        <Route path="/ResearchProjects" element={<ResearchProjects />} />
        <Route path="/ipr" element={<IPRPage />} />
        <Route path="/innovation" element={<InnovationPage />} />
        <Route path="/startups" element={<StartupsPage />} />
        <Route path="/funds" element={<FundsPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/MentorList" element={<MentorList />} />
      <Route path="/mentors/:id" element={<MentorDetail />} />
      <Route path="/add-mentor" element={<AddMentorForm />} />
      </Routes>
    </Router>
  );
};

export default App;
