import React from 'react';
import { motion } from "framer-motion";
import DessinComplet from "../components/dessin_moi/DessinComplet";
import "../assets/home.css";
import "../assets/general_disposition.css";

function Home() {

  return (
    <div className="general-disposition home-home">
      <div className="home-left">
        <div className="presentation">
          <motion.p
            initial={{ x:"100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x:"100%", opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 1 }}
          >
            Hi there,
          </motion.p>
          <motion.p
            initial={{ x:"-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x:"-100%", opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 0.3 }}
          >
            I'm
          </motion.p>
          <motion.p
            initial={{ x:"100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x:"100%", opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 0.6 }}
          >
            David!
          </motion.p>
        </div>
        <div className="svg-container">
          <motion.svg
            className="border-content"
            viewBox="0 0 420 55"  // Ajuste ces valeurs en fonction de la taille de ton rectangle
            preserveAspectRatio="none"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              exit={{ pathLength: 0 }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
              }}
              strokeWidth={1}
              strokeDasharray="0 1"
              fill="none"
              d="M1,1 H418 V54 H1 Z"
            />
          </motion.svg>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 0.9 }}
          >
            A front-end developer turning creativity into interactive web experiences.
          </motion.p>
        </div>
      </div>
      <div className='home-right'>
        <DessinComplet />
      </div>
    </div>
  );
}

export default Home;
