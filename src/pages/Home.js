import React from 'react';
import "../assets/home.css"

function Home() {
  return (
    <div className="home-disposition">
      <div className="home-left">
        <div className="presentation">
          <p>
            Hi there, I'm David!
          </p>
        </div>
        <div className="separation"></div>
        <div className="presentation-content">
          <p>
            A front-end developer turning creativity into interactive web experiences.
          </p>
        </div>
      </div>
      <div className="home-right">
        <div className="pic"></div>
      </div>
    </div>
  );
}

export default Home;
