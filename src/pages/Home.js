import React from 'react';
import { motion } from "framer-motion";
import "../assets/home.css"
import "../assets/general_disposition.css"
import portrait01 from '../assets/photos/home/portrait_v001.svg'
import moi from '../assets/photos/moi_01.jpg'

function Home() {

  return (
    <div className="general-disposition home-home">
      <div className="home-left">
        <div className="presentation">
          <p>
            Hi there, I'm David!
          </p>
        </div>
        <div className="presentation-content">
          <p>
            A front-end developer turning creativity into interactive web experiences.
          </p>
        </div>
      </div>
      <div className='home-right'>
        {/* <img src={portrait01} alt='' width="100%" height="100%"/> */}
        {/* <img className='photo-home' src={moi} alt='Picture of David Cazal'/> */}
      </div>
    </div>
  );
}

export default Home;
