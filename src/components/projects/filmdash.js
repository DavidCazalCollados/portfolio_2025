import { react } from 'motion/react-client';
import HoverVideoPlayer from 'react-hover-video-player';
import '../../assets/banner.css';
import '../../assets/filmdash.css';
import "../../assets/general_disposition.css";

import preferencesImage from "../../assets/photos/screen_function/preferences_photo.jpg";
import preferencesVideo from "../../assets/photos/screen_function/preferences_video.mp4";
import selectionImage from "../../assets/photos/screen_function/selection_photo.jpg";
import selectionVideo from "../../assets/photos/screen_function/selection_video.mp4";
import watchlistImage from "../../assets/photos/screen_function/watchlist_photo.jpg";
import watchlistVideo from "../../assets/photos/screen_function/watchlist_video.mp4";

import React from 'react';

function Filmdash() {
  const filmdashHover = [
    {
      sectionName: "preferences",
      sectionImage: preferencesImage,
      sectionVideo: preferencesVideo
    },

    {
      sectionName: "selection",
      sectionImage: selectionImage,
      sectionVideo: selectionVideo
    },

    {
      sectionName: "watchlist",
      sectionImage: watchlistImage,
      sectionVideo: watchlistVideo
    }
  ];

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
          </div>
        </div>

        <div className='development-filmdash'>
          <div className='development-text-filmdash'>
            <p>
              The project was developed as a final
              project during a 2-month coding bootcamp at Le Wagon, where it was chosen
              from a pool of ideas and built by a team of 3 developers over a 2-week agile sprint.
            </p>
            <div className='border-development-filmdash'></div>
          </div>
          <div className='development-picture-filmdash'>
          </div>
        </div>

        <div className='function-filmdash'>
          <div className='phones-image-function-filmdash'>
            {filmdashHover.map((item, index) => (
                <div key={`${index}`}
                  className={`${item.sectionName}-video-container`}
                >
                  <HoverVideoPlayer
                  videoSrc={item.sectionVideo}
                  pausedOverlay={
                    <img
                      src={item.sectionImage}
                      alt={`${item.sectionName}`}
                      className={`${item.sectionName}`}
                    />
                  }
                  loadingOverlay={
                    <div className="loading-overlay">
                      <div className="loading-spinner" />
                    </div>
                  }
                  />
                </div>
              ))}
            {/* <div className='phone-one'></div>
            <div className='phone-two'></div>
            <div className='phone-three'></div> */}
          </div>
          <div className='text-function-filmdash'>
          </div>
        </div>

      </div>
    </div>
  )
}
export default Filmdash;
