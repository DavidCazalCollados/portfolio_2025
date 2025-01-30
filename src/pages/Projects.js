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
      <div className='project-entete'>
        <h2>Projects</h2>
      </div>
      <div className='project-container'>
        <div className='filmdash-project'>
          <div className='filmdash-photo'>
            <Link to='/projects/filmdash'><h3>Filmdash</h3></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;
