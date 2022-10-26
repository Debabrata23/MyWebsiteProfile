import logo from './logo.svg';
import './App.scss';
import React from 'react';
import TopNavigation from './components/TopNavigation';
import Home from './components/Home/Home';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {HashRouter} from 'react-router-dom';
import Certifications from './components/Certifications/Certifications';
import { createBrowserHistory } from "history";
import {Router} from 'react-router'
import WorkExperience from './components/WorkExperience/WorkExperience';

function App() {
  const historyname=createBrowserHistory();
  return (
    // <HashRouter>
    // <Routes>
    
    //     <Route  exact path="/" element={<Home />} />
    //     <Route  path="/WorkExperience#" element={<WorkExperience />} />
    //     <Route  path="/Certifications#" element={<Certifications />} />
      
     
    // </Routes>
    // </HashRouter>
    <Home/>
  
    // <React.Fragment>
    // <TopNavigation></TopNavigation>
    
    // </React.Fragment>
  );
}

export default App;
