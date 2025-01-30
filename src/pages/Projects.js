import React from 'react';
import { Link } from "react-router";

import filmDashImage from '../assets/photos/FILMDASH_SCREEN_LAPTOP.png';
import coverFilmdash from "../assets/photos/cover_filmdash.jpg";
import filmDashVideo from '../assets/videos/FILMDASH_LAPTOP.mov';
import HoverVideoPlayer from 'react-hover-video-player';
import { motion } from "motion/react"

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
      <svg className='line-top' width="100%" height="1" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M0,0 L200,0"
          stroke="black"
          strokeWidth="2"
          initial={{ translateX: "-40%" }}
          animate={{ translateX: "100%" }}
          transition={{
            duration: 1.5,
            ease: "easeInOut"
          }}
        />
      </svg>
      <svg className='line-right' width="1" height="100%" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M0,0 L0,200"
          stroke="black"
          strokeWidth="2"
          initial={{ translateY: "-30%" }}
          animate={{ translateY: "100%" }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            // delay: 0.4
          }}
        />
      </svg>

      <svg className='line-left' width="1" height="100%" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M0,0 L0,200"
          stroke="black"
          strokeWidth="2"
          initial={{ translateY: "100%" }}
          animate={{ translateY: "-30%" }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            // delay: 1.4
          }}
        />
      </svg>

      <motion.div
        className='project-container'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay: 1.2
        }}
        >
        <div className='filmdash-project'>
          {/* <div className='filmdash-photo'> */}
            <Link to='/projects/filmdash'><h3>Filmdash</h3></Link>
          {/* </div> */}
        </div>
      </motion.div>
      <svg className='line-bottom' width="100%" height="1" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M800,0 L1000,0"
          stroke="black"
          strokeWidth="2"
          initial={{ translateX: "50%" }}
          animate={{ translateX: "-100%" }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            // delay: 0.8
          }}
        />
      </svg>
    </div>
  )
}

export default Projects;
