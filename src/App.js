import logo from './logo.svg';
import './App.css';
import React from 'react';
import TopNavigation from './components/TopNavigation';
import Home from './components/Home/Home';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Certifications from './components/Certifications/Certifications';

import WorkExperience from './components/WorkExperience/WorkExperience';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    
        <Route  path="/" element={<Home />} />
        <Route path="/WorkExperience" element={<WorkExperience />} />
        <Route path="/Certifications" element={<Certifications />} />
      
     
    </Routes>
  </BrowserRouter>
    // <React.Fragment>
    // <TopNavigation></TopNavigation>
    
    // </React.Fragment>
  );
}

export default App;
