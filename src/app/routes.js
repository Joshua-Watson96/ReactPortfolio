import React from "react";
import { Route, Routes } from "react-router-dom";
import { About } from '../pages/about/about';
import { Home } from '../pages/home/home';
import { Portfolio } from '../pages/portfolio/portfolio';
import { ContactMe } from '../pages/contact/contact';
import { Resume } from '../pages/resume/resume';


function AppRoutes() {
  return (
    <div className="routeDiv">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
  
      </Routes>
    </div>
  );
}

export default AppRoutes;
