import React from 'react';
import ReactDOM from "react-dom/client";
import App from './app/App.js'
import './index.css'
// import { dirsToCreate } from 'gh-pages/lib/util';
import { BrowserRouter as Router, Routes, Route }  from 'react-router-dom';
import { About } from './pages/about/about.js';

ReactDOM.createRoot(document.getElementById("root")).render(
    <Router basename='ReactPortfolio'>
        <Routes>
        <Route exact path='/' Component={App}/>
        <Route exact path='/about' Component={About}/>
        </Routes>
    
    </Router>
);