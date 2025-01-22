import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Projects from '../pages/Projects';
import Filmdash from '../components/projectsInside/FilmDash';

import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/filmdash" element={<Filmdash />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes
