import React from "react";
import '../assets/navbar.css'
import { Link } from 'react-router-dom';
import { motion } from "motion/react"

function Navbar() {

    return (
        <motion.div
          className="topnav"
          initial={{ opacity: 0}}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeInOut", duration: 1.5 }}
        >
          {/* <nav className="navbar margin-nav navbar-expand-lg">
            <div className="container-fluid">
              <div className="collapse navbar-collapse centered-nav" id="navbarNavAltMarkup">
                <div className="navbar-nav disposition">
                  <Link className="nav-link" to="/">HOME</Link>
                  <Link className="nav-link" to="/projects">PROJECTS</Link>
                  <Link className="nav-link" to="/about">ABOUT</Link>
                  <Link className="nav-link" to="/contact">CONTACT</Link>
                </div>
              </div>
            </div>
          </nav> */}
          <nav className="navbar-portfolio">
            <Link className="button-link" to="/">HOME</Link>
            <Link className="button-link" to="/projects">PROJECTS</Link>
            <Link className="button-link" to="/about">ABOUT</Link>
            <Link className="button-link" to="/contact">CONTACT</Link>
          </nav>
        </motion.div>
    );
}

export default Navbar;
