import React from "react";
import '../assets/navbar.css'
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
        <div class="topnav">
          <nav class="navbar margin-nav navbar-expand-lg">
            <div class="container-fluid">
              <div class="collapse navbar-collapse centered-nav" id="navbarNavAltMarkup">
                <div class="navbar-nav disposition">
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
