import React from 'react';
import "../assets/projects.css"
import "../assets/general_disposition.css"
import filmDashImagePhone from '../assets/photos/FILMDASH_SCREEN.png';
import filmDashVideoPhone from '../assets/videos/SCREEN_REC_FILMDASH.mp4';
import filmDashImage from '../assets/photos/FILMDASH_SCREEN_LAPTOP.png';
import filmDashVideo from '../assets/videos/FILMDASH_LAPTOP.mov';
import HoverVideoPlayer from 'react-hover-video-player';

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
        <h2>PROJECTS</h2>
      </div>
      <div className='project-container'>
        {/* <div className='project-infos'>
          <p>
            <strong>FilmDash</strong> is a mobile-first web app that helps professionals
            and students quickly find personalized movie recommendations based on
            their streaming subscriptions and location, reducing decision fatigue
            when choosing what to watch.
          </p>
        </div> */}
        <div className='video-container'>
          <HoverVideoPlayer
          hoverOverlay={
            <div className="hover-overlay">
              <h1>Video Title</h1>
              <p>
                Here is a short description of the video. You can still see the video
                playing underneath this overlay.
                <a href="/video-page">Click here to read more</a>
              </p>
            </div>
          }
            videoSrc={filmDashVideo}
            pausedOverlay={
              <img
                src={filmDashImage}
                alt='Filmdash: homepage'
                className="filmdash-project"
              />
            }
            loadingOverlay={
              <div className="loading-overlay">
                <div className="loading-spinner" />
              </div>
            }
          />
        </div>
      </div>
    </div>
  )
}

export default Projects;
