import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Landing/Landingpg';
import Home from './Home/Home';
import Dashboard from './Home/Dashboard';
import Topbar from './Home/Topbar';
import Sidebar from './Home/Sidebar';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;