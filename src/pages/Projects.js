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
              <path
                className='border-rect'
                d="M 0 0 H 100 V 100 H 0 Z" // Path data for a rectangle
                fill="transparent"
                strokeWidth="1"
                stroke="var(--font-color)"
              />
            </svg>
            <DessinTv />
          </div>
      </div>
    </div>
  )
}

export default Projects;
