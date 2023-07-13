import React from "react";
import { Route, Routes } from "react-router-dom";
import { About } from '../pages/about/about';
import { Home } from '../pages/home/home';
import { Portfolio } from '../pages/portfolio/portfolio';
import { ContactMe } from '../pages/contact/contact';
import { Resume } from '../pages/resume/resume';
import App from "./App.js";

function AppRoutes() {
  return (
    <div className="s_c">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
         {/* <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<ContactMe />} />
  <Route path="/resume" element={<Resume />} /> */}
      </Routes>
    </div>
  );
}

export default AppRoutes;
