import React from "react";
import '../assets/navbar.css'

class Navbar extends React.Component {
  render() {
    return (
      <nav class="navbar margin-nav navbar-expand-lg">
        <div class="container-fluid">
          <div class="collapse navbar-collapse centered-nav" id="navbarNavAltMarkup">
            <div class="navbar-nav disposition">
              <a class="nav-link" href="#">HOME</a>
              <a class="nav-link" href="#">PROJECTS</a>
              <a class="nav-link" href="#">ABOUT</a>
              <a class="nav-link" href="#">CONTACT</a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
