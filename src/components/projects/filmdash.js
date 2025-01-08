import { react } from 'motion/react-client';
import '../../assets/banner.css'
import '../../assets/filmdash.css'
import "../../assets/general_disposition.css"
import React from 'react';

function Filmdash() {
  return(
    <div className='filmdash'>
      <div className='banner-filmdash'>
        <h1>FilmDash</h1>
        <h4>Your cinematic journey!</h4>
      </div>
      <div className='general-disposition'>
          <div className='about'>
              <p>About</p>
          </div>
        <div className='intro-filmdash'>
          <div className='presentation-picture-filmdash'>
          </div>
          <div className='text-presentation-filmdash'>
            <div className='begin-presentation-filmdash'>
              <p>
                FilmDash is a web application designed for mobile-first experiences,
                aiming to help working professionals and students (ages 20-50) find tailored
                entertainment quickly and easily.
              </p>
            </div>
            {/* <div className='end-presentation-filmdash'>
              <p>
                The project was developed as a final
                project during a 2-month coding bootcamp at Le Wagon, where it was chosen
                from a pool of ideas and built by a team of 3 developers over a 2-week agile sprint.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Filmdash;
