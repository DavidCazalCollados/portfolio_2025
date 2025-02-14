import React, { useState } from "react";
import useMediaQuery from '@mui/material/useMediaQuery';
import '../assets/navbar.css'
import { Link } from 'react-router-dom';
import { motion } from "motion/react"

function Navbar() {

  const matches = useMediaQuery('(max-width: 500px)');
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
        {matches ? (
          <>
            <div className="navline">
              <Link to="/" className="name-entete">
                <p>David</p>
                <p className="name-separation"></p>
                <p>Cazal</p>
              </Link>
              <svg className="hamburger-icon" onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 50 50">
                <path
                  d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"
                />
              </svg>
            </div>
            <div className={`dropdown-menu ${menuOpen ? 'open' : ''}`}>
              <Link className={`button-link ${menuOpen ? 'show' : ''}`} onClick={toggleMenu} to="/">HOME</Link>
              <Link className={`button-link ${menuOpen ? 'show' : ''}`} onClick={toggleMenu} to="/projects">PROJECTS</Link>
              <Link className={`button-link ${menuOpen ? 'show' : ''}`} onClick={toggleMenu} to="/about">ABOUT</Link>
              <Link className={`button-link ${menuOpen ? 'show' : ''}`} onClick={toggleMenu} to="/contact">CONTACT</Link>
            </div>
            <div className={`overlay ${menuOpen ? 'overlay-show' : ''}`} onClick={toggleMenu}></div>
          </>
        ) : (
          <div className="screen">
            <Link className="button-link" to="/">HOME</Link>
            <Link className="button-link" to="/projects">PROJECTS</Link>
            <Link className="button-link" to="/about">ABOUT</Link>
            <Link className="button-link" to="/contact">CONTACT</Link>
          </div>
        )}
      </nav>
    </motion.div>
  );
}

export default Navbar;
