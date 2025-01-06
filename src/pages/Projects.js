import React from 'react';
import "../assets/projects.css"
import "../assets/general_disposition.css"

function Projects() {
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
        <video
          poster="../assets/photos/FILMDASH_SCREEN.png"
          onMouseOver={event => event.target.play()}
          onMouseOut={event => event.target.pause()}
          src="../assets/videos/SCREEN_REC_FILMDASH.mp4" >
        </video>
      </div>
    </div>
  )
}

export default Projects;
