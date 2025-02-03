import React from 'react';
import { Link } from "react-router";
import coverFilmdash from "../assets/photos/cover_filmdash.jpg";
import { motion } from "motion/react"

import DessinTv from "../components/DessinTv";

import "../assets/projects.css"
import "../assets/general_disposition.css"

function Projects() {
  const projectHover = [
    {
      projectName: 'Filmdash',
      projectImage: "../assets/photos/FILMDASH_SCREEN.jpg",
      projectVideo: "../assets/videos/SCREEN_REC_FILMDASH.mp4"
    }
  ];
  return(
    <div className="general-disposition project-disposition">
      <motion.div
        className='project-entete'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          ease: "easeInOut"
        }}
      >
        <h2>Projects</h2>
      </motion.div>
      <motion.div
        className='project-container'
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // transition={{
        //   duration: 1,
        //   ease: "easeInOut",
        //   delay: 1.2
        // }}
        >
          <div className='filmdash-project'>
            <svg
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
              className="filmdash-container"
            >
              <rect
                className="border-rect"
                // x="0"
                // y="0"
                width="100%"
                height="100%"
                // rx="4px"
                // ry="4px"
                fill="transparent"
                stroke="black"
                strokeWidth="1.5"
              />
            </svg>
            <DessinTv />
          </div>
      </motion.div>
    </div>
  )
}

export default Projects;
