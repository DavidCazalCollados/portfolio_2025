import React from 'react';
import { Link } from "react-router";
import coverFilmdash from "../assets/photos/cover_filmdash.jpg";
import { motion } from "motion/react";

import DessinTv from "../components/DessinTv";
import BorderProjects from "../components/BorderProjects";

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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          opacity:{
            duration: 2,
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
          <div className='filmdash-project'>
            <BorderProjects />
            <DessinTv />
          </div>
      </div>
    </div>
  )
}

export default Projects;
