import logo from './logo.svg';
import './App.css';
import React from 'react';
import TopNavigation from './components/TopNavigation';
import Home from './components/Home/Home';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route,Router } from "react-router-dom";
import {HashRouter} from 'react-router-dom';
import Certifications from './components/Certifications/Certifications';

import WorkExperience from './components/WorkExperience/WorkExperience';

function App() {
  return (
    <HashRouter basename='/MyWebsiteProfile'>
    <Routes>
    
        <Route  exact path="/" element={<Home />} />
        <Route  path="/MyWebsiteProfile/WorkExperience" element={<WorkExperience />} />
        <Route  path="/MyWebsiteProfile/Certifications" element={<Certifications />} />
      
     
    </Routes>
    </HashRouter>
  
    // <React.Fragment>
    // <TopNavigation></TopNavigation>
    
    // </React.Fragment>
  );
}

export default App;
