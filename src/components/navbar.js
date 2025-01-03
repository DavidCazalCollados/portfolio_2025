import React from "react";
import '../assets/navbar.css'
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
        <div className="topnav">
          <nav className="navbar margin-nav navbar-expand-lg">
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
          </nav>
        </div>
    );
  }
}

export default Navbar;
