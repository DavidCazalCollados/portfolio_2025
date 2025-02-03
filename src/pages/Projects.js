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

      <div
        className='project-container'
        >
          <div className='filmdash-project'>
            <svg
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
              className="filmdash-container"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <motion.path
                className='border-rect'
                d="M 0.1 0.1 H 99.9 V 99.9 H 0.1 z"
                fill="transparent"
                strokeWidth={0.1}
                stroke="var(--font-color)"
                // vectorEffect="non-scaling-stroke"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.3, ease: "easeInOut" }}
              />
            </svg>
            <DessinTv />
          </div>
      </div>
    </div>
  )
}

export default Projects;
