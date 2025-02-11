import React, { useState } from "react";
import '../assets/navbar.css'
import { Link } from 'react-router-dom';
import { motion } from "motion/react"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  };

    return (
        <motion.div
          className="topnav"
          initial={{ opacity: 0}}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeInOut", duration: 1.5 }}
        >
          <nav className="navbar-portfolio">
            <div className="screen">
              <Link className="button-link" to="/">HOME</Link>
              <Link className="button-link" to="/projects">PROJECTS</Link>
              <Link className="button-link" to="/about">ABOUT</Link>
              <Link className="button-link" to="/contact">CONTACT</Link>
            </div>
            <div className="hamburger">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 50 50">
                <path
                  d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"
                />
              </svg>
            </div>
          </nav>
        </motion.div>
    );
}

export default Navbar;
