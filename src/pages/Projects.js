import React, { useState } from 'react';
import { Link } from "react-router";
import { motion } from "motion/react";
import useMediaQuery from '@mui/material/useMediaQuery';

import DessinTv from "../components/DessinTv";
import BorderProjects from "../components/BorderProjects";

import "../assets/projects.css"
import "../assets/general_disposition.css"
import "../assets/background_filmdash_button.css"

function Projects() {
  const matches = useMediaQuery('(max-width: 500px)');

  const [isHovered, setIsHovered] = useState(false);
  const [isTouched, setIsTouched] = useState(false)

  const hoverStylesTitle = {
    scale: isHovered ? `${matches ? "1" : "1.1"}` : "1",
    color: isHovered ? "#ffe372f0" : `${matches ? "#ffe372f0" : "#ffe3729e"}`
  };

  const hoverStylesBackground = {
    top: isHovered ? "0%" : "3.5%",
    left: isHovered ? "0.4%" : "2.5%",
  }

  const touchStylesTitle = {
    scale: isTouched ? "1.1" : "1"
  }

  const touchStylesBackground = {
    top: isTouched ? `${matches ? "0%" : "3.5%"}` : "3.5%",
    left: isTouched ? `${matches ? "0.4%" : "2.5%"}` : "2.5%"
  }

  const combinedStylesTitle = {
    ...hoverStylesTitle,
    ...touchStylesTitle
  };

  const combinedStylesBackground = {
    ...hoverStylesBackground,
    ...touchStylesBackground
  };

  return(
    <div className="general-disposition project-disposition">
      <motion.div
        className='project-entete'
        // Animation
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          opacity:{
            duration: 3,
            ease: "easeInOut"
          },
          y:{
            duration: 0.8,
            ease: "easeInOut"
          }
        }}
      >
        <h2>Projects</h2>
      </motion.div>

      <div
        className='project-container'
        >
          <Link
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsTouched(true)}
            onTouchEnd={() => setIsTouched(false)}
            to="/projects/filmdash"
            className='filmdash-project filmdash-button'
          >
            <motion.h4
              style={combinedStylesTitle}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
                Filmdash
            </motion.h4>
            <BorderProjects />
            <DessinTv />
            <motion.div
              className='test-background-filmdash'
              style={combinedStylesBackground}
              // Animation
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
            </motion.div>
          </Link>
      </div>
    </div>
  )
}

export default Projects;
