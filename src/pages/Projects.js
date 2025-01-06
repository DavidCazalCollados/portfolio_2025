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
      <div className="work-infos">
        <h5>PROJECTS</h5>
        <p>In this section, you'll find my final project,
          which I worked on extensively during my front-end development training at Le Wagon.
          This project highlights my skills in building modern and functional interfaces,
          while adhering to best web development practices.
          Feel free to explore the details of the project, including the technologies used
          and the challenges I encountered throughout its development.
        </p>
      </div>
      <div className="work-list">
        <div className='video-container'>
          <HoverVideoPlayer
          // hoverOverlay={
          //   <div className="hover-overlay">
          //     <h1>Video Title</h1>
          //     <p>
          //       Here is a short description of the video. You can still see the video
          //       playing underneath this overlay.
          //       <a href="/video-page">Click here to read more</a>
          //     </p>
          //   </div>
          // }
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
