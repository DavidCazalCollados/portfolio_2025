import React from 'react';
import { Link } from "react-router";
import { motion } from "motion/react";

import DessinTv from "../components/DessinTv";
import BorderProjects from "../components/BorderProjects";

import "../assets/projects.css"
import "../assets/general_disposition.css"
import "../assets/background_filmdash_button.css"

function Projects() {

  const handleMouseEnter = (e) => {
    e.currentTarget.firstElementChild.style.scale = "1.1"
    e.currentTarget.firstElementChild.style.opacity = "100%"
    e.currentTarget.lastElementChild.style.top = "0%"
    e.currentTarget.lastElementChild.style.left = "0.4%"
    e.currentTarget.lastElementChild.style.borderRadius = "1.5%"
  }

  const handleMouseLeave = (e) => {
    e.currentTarget.firstElementChild.style.scale = "1"
    e.currentTarget.firstElementChild.style.opacity = "50%"
    e.currentTarget.lastElementChild.style.top = "3.5%"
    e.currentTarget.lastElementChild.style.left = "2.5%"
    e.currentTarget.lastElementChild.style.borderRadius = "7px"
  }

  return(
    <div className="general-disposition project-disposition">
      <motion.div
        className='project-entete'
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
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            to="/projects/filmdash"
            className='filmdash-project filmdash-button'
          >
            <motion.h4
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5}}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
                Filmdash
            </motion.h4>
            <BorderProjects />
            <DessinTv />
            <motion.div
              className='test-background-filmdash'
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
