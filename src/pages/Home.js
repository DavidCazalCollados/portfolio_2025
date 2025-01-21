import React from 'react';
import { motion } from "framer-motion";
import "../assets/home.css"
import "../assets/general_disposition.css"
import portrait01 from '../assets/photos/home/portrait_v001.svg'

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
        <motion.svg
          style={{ width: "1806", height: "2470" }}
          viewBox="0 0 1806 2470"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <motion.image
            x="647"
            y="603"
            width="566"
            height="733"
            href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAAAXCAYAAACPm4iNAAAA1klEQVRYhe2Y0QrDIAxF72T//8sZYw2UEF1LVKK956VgaVoPaaK+AAiA75UYRCSspBxy45FIVTAoeRzlFJmSB1BMSJVM0Z2wgnFIZjZ3whOsUHIHWoJByXH+CQbrcoz3xad1IyLOGGlwVbAnVZwxYrgr2JNN0Q0ighWvfIDCf/QQrFihj6/X6CzY4tVrPE32SMFnarLtve2YJbgldOvszjahlVck7kYs60Qyi67taN1vzZ4pGcpHqGes9CuObI6tc5bQe1ZuKhHh01YyO3XtO6d9c+YN4ANQJSE7ISPVQQAAAABJRU5ErkJggg=="
            animate={{ x: 200, y: 200 }} // Exemple d'animation
            transition={{ duration: 2 }}
          />
        </motion.svg>
      </div>
    </div>
  );
}

export default Home;
