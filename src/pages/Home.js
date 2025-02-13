import React from 'react';
import { motion } from "framer-motion";
import useMediaQuery from '@mui/material/useMediaQuery';
import DessinComplet from "../components/dessin_moi/DessinComplet";
import { Link } from 'react-router-dom';
import "../assets/home.css";
import "../assets/button.css";
import "../assets/general_disposition.css";

function Home() {

  const matches = useMediaQuery('(max-width: 420px)');

  return (
    <div className="general-disposition">
      {matches ? (

        <section className='home-phone'>
          <div className='home-phone-top'>
            <div className="presentation-phone">
              <motion.p
                initial={{ x:"100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 1 }}
              >
                Hi there,
              </motion.p>
              <motion.p
                initial={{ x:"-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 1, delay: 0.3 }}
              >
                I'm
              </motion.p>
              <motion.p
                initial={{ x:"100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 1, delay: 0.6 }}
              >
                David!
              </motion.p>
            </div>
            <div className="svg-container-phone">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 1, delay: 0.9 }}
              >
                A front-end developer turning creativity into interactive web experiences.
              </motion.p>
            </div>
          </div>
          <div className='home-phone-middle'>
            <motion.div
              className='button-projects-phone'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                ease: "easeInOut",
                duration: 1,
                delay: 1 }}
            >
              <Link to='/projects'>
                <button className="button-52">Projects</button>
              </Link>
            </motion.div>
          </div>
          <div className='home-phone-bottom'>

          </div>
        </section>

      ) : (
        <section className="home-home">
          <div className="home-left">
            <div className="presentation">
              <motion.p
                initial={{ x:"100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 1 }}
              >
                Hi there,
              </motion.p>
              <motion.p
                initial={{ x:"-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 1, delay: 0.3 }}
              >
                I'm
              </motion.p>
              <motion.p
                initial={{ x:"100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 1, delay: 0.6 }}
              >
                David!
              </motion.p>
            </div>
            <div className="svg-container">
              <motion.svg
                className="border-content"
                viewBox="0 0 420 55"
                preserveAspectRatio="none"
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
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
                transition={{ ease: "easeInOut", duration: 1, delay: 0.9 }}
              >
                A front-end developer turning creativity into interactive web experiences.
              </motion.p>
            </div>
            <motion.div
              className='button-projects'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                ease: "easeInOut",
                duration: 1,
                delay: 1 }}
            >
              <Link to='/projects'>
                <button className="button-52">Projects</button>
              </Link>
            </motion.div>
          </div>
          <div className='home-right'>
            <DessinComplet />
            <motion.div
              className='red-square'
              initial={{ opacity: 0, top: "-15%" }}
              animate={{ opacity: 1, top: "12%" }}
              transition={{
                ease: "easeInOut",
                duration: 1,
                delay: 1
              }}
              style={{
                top: "12%"
              }}
            >
              <Link className="about-link-home" to="/about">
                About
              </Link>
            </motion.div>
            <motion.div
              className='blue-square'
              initial={{ opacity: 0, top: "50%" }}
              animate={{ opacity: 1, top: "40%" }}
              transition={{
                ease: "easeInOut",
                duration: 1,
                delay: 1
              }}
              style={{
                top: "40%"
              }}
            >
              <Link className="contact-link-home" to="/contact">
                Contact
              </Link>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
}

export default Home;
