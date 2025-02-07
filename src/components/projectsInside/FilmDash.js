// import { div, img, react } from 'motion/react-client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
        motion,
        useMotionValueEvent,
        useScroll,
        useTransform,
        useSpring
      } from "framer-motion";
import HoverVideoPlayer from 'react-hover-video-player';

import '../../assets/banner.css';
import '../../assets/filmdash.css';
import '../../assets/button_try.css'
import "../../assets/general_disposition.css";

import Caroussel from '../Caroussel';
import preferencesImage from "../../assets/photos/screen_function/preferences_photo.jpg";
import preferencesVideo from "../../assets/photos/screen_function/preferences_video.mp4";
import selectionImage from "../../assets/photos/screen_function/selection_photo.jpg";
import selectionVideo from "../../assets/photos/screen_function/selection_video.mp4";
import watchlistImage from "../../assets/photos/screen_function/watchlist_photo.jpg";
import watchlistVideo from "../../assets/photos/screen_function/watchlist_video.mp4";
import projector from "../../assets/photos/projector.jpg"
import Spinner from '../Spinner';

function FilmDash() {

  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    setTimeout(function () {
      console.log("Delayed for 2 second.");
      setIsFetching(false);
    }, 2000);
  }, []);

  const {scrollY} = useScroll();

  useMotionValueEvent(scrollY, "change", (val) => {
    console.log(val);
  });

  // Scroll animation variables
  const opacity = useTransform(scrollY, [44, 476], [0, 1]);
  const opacitySecond = useTransform(scrollY, [530, 875], [0, 1]);

  const pathLengthTop = useSpring(useTransform(scrollY, [150, 400], [0, 1]), {
    damping: 30,
    stiffness: 300
  });
  const pathLengthBottom = useSpring(useTransform(scrollY, [370, 500], [0, 1]), {
    damping: 30,
    stiffness: 300
  });
  const pathLengthSecond = useSpring(useTransform(scrollY, [876, 1100], [0, 1]), {
    damping: 30,
    stiffness: 300
  });


  const contentMoveAbout = useSpring(useTransform(scrollY, [150, 500], ["50%", "0%"]), {
    damping: 30,
    stiffness: 300
  });
  const photoMoveAbout = useSpring(useTransform(scrollY, [150, 500], ["-20%", "0%"]), {
    damping: 30,
    stiffness: 300
  });
  const contentMoveAboutSecond = useSpring(useTransform(scrollY, [535, 900], ["-50%", "0%"]), {
    damping: 30,
    stiffness: 300
  });
  const contentMoveAboutSecondPhoto = useSpring(useTransform(scrollY, [535, 900], ["50%", "0%"]), {
    damping: 30,
    stiffness: 300
  });

  const scrollRuby = useSpring(useTransform(scrollY, [1280, 1320], [0, 1]), {
    damping: 30,
    stiffness: 300
  });
  const scrollHtml = useSpring(useTransform(scrollY, [1320, 1360], [0, 1]), {
    damping: 30,
    stiffness: 300
  });
  const scrollSass = useSpring(useTransform(scrollY, [1360, 1400], [0, 1]), {
    damping: 30,
    stiffness: 300
  });
  const scrollJs = useSpring(useTransform(scrollY, [1400, 1440], [0, 1]), {
    damping: 30,
    stiffness: 300
  });
  const scrollStimulus = useSpring(useTransform(scrollY, [1440, 1480], [0, 1]), {
    damping: 30,
    stiffness: 300
  });
  const scrollHeroku = useSpring(useTransform(scrollY, [1480, 1520], [0, 1]), {
    damping: 30,
    stiffness: 300
  });
  const scrollGit = useSpring(useTransform(scrollY, [1520, 1560], [0, 1]), {
    damping: 30,
    stiffness: 300
  });

  const scalePhones = useSpring(useTransform(scrollY, [2355, 2725], [0.9, 1]), {
    damping: 30,
    stiffness: 300
  });
  const scaleCaroussel = useSpring(useTransform(scrollY, [1675, 2150], [0.9, 1]), {
    damping: 30,
    stiffness: 300
  });

  const filmdashHover = [
    {
      sectionName: "preferences",
      sectionImage: preferencesImage,
      sectionVideo: preferencesVideo,
      description: "Select your preferences"
    },

    {
      sectionName: "selection",
      sectionImage: selectionImage,
      sectionVideo: selectionVideo,
      description: "And make your choice!"
    },

    {
      sectionName: "watchlist",
      sectionImage: watchlistImage,
      sectionVideo: watchlistVideo,
      description: "Or save it for later..."
    }
  ];

  const languagesLogo = [
    {
      name: "ruby-on-rails",
      path: "M.741 19.365h8.36s-1.598-7.291 3.693-10.243l.134-.066c1.286-.637 4.907-2.431 10.702 1.854.19-.159.37-.286.37-.286s-5.503-5.492-11.63-4.878c-3.079.275-6.867 3.079-9.09 6.783C1.058 16.233.741 19.365.741 19.365Zm8.804-.783a10.682 10.682 0 0 1-.127-1.333l1.143.412c.063.498.159.963.254 1.376l-1.27-.455Zm-7.799-4.317L.529 13.82c-.201.455-.423.984-.529 1.27l1.217.444c.137-.359.36-.878.529-1.269Zm7.831.296.857.677c.042-.413.116-.825.222-1.238l-.762-.603c-.137.391-.233.783-.317 1.164Zm2.042-2.646-.508-.762c.191-.243.413-.486.656-.709l.476.72a5.958 5.958 0 0 0-.624.751ZM4.19 8.878l.752.656c-.254.265-.498.551-.72.836l-.815-.698c.244-.265.508-.529.783-.794Zm9.799 1.027-.243-.73c.265-.117.571-.233.931-.339l.233.698a6.82 6.82 0 0 0-.921.371Zm3.122-.656.042-.667c.339.021.688.064 1.048.138l-.042.656a5.859 5.859 0 0 0-1.048-.127ZM8.942 6.392l-.476-.731c-.265.138-.54.286-.826.455l.487.741c.275-.169.54-.328.815-.465Zm9.217-.053.042-.709c-.095-.053-.36-.18-1.026-.371l-.043.699c.349.116.688.243 1.027.381ZM13.238 5.28h.106l-.212-.645c-.328 0-.666.021-1.016.063l.201.625a8.87 8.87 0 0 1 .921-.043Z",
      style: {scale: scrollRuby}
    },
    {
      name: "HTML",
      path: "M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z",
      style: {scale: scrollHtml}
    },
    {
      name: "SASS",
      path: "M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zM9.615 15.998c.175.645.156 1.248-.024 1.792l-.065.18c-.024.061-.052.12-.078.176-.14.29-.326.56-.555.81-.698.759-1.672 1.047-2.09.805-.45-.262-.226-1.335.584-2.19.871-.918 2.12-1.509 2.12-1.509v-.003l.108-.061zm9.911-10.861c-.542-2.133-4.077-2.834-7.422-1.645-1.989.707-4.144 1.818-5.693 3.267C4.568 8.48 4.275 9.98 4.396 10.607c.427 2.211 3.457 3.657 4.703 4.73v.006c-.367.18-3.056 1.529-3.686 2.925-.675 1.47.105 2.521.615 2.655 1.575.436 3.195-.36 4.065-1.649.84-1.261.766-2.881.404-3.676.496-.135 1.08-.195 1.83-.104 2.101.24 2.521 1.56 2.43 2.1-.09.539-.523.854-.674.944-.15.091-.195.12-.181.181.015.09.091.09.21.075.165-.03 1.096-.45 1.141-1.471.045-1.29-1.186-2.729-3.375-2.7-.9.016-1.471.091-1.875.256-.03-.045-.061-.075-.105-.105-1.35-1.455-3.855-2.475-3.75-4.41.03-.705.285-2.564 4.8-4.814 3.705-1.846 6.661-1.335 7.171-.21.733 1.604-1.576 4.59-5.431 5.024-1.47.165-2.235-.404-2.431-.615-.209-.225-.239-.24-.314-.194-.12.06-.045.255 0 .375.12.3.585.825 1.396 1.095.704.225 2.43.359 4.5-.45 2.324-.899 4.139-3.405 3.614-5.505l.073.067z",
      style: {scale: scrollSass}
    },
    {
      name: "java-script",
      path: "M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z",
      style: {scale: scrollJs}
    },
    {
      name: "stimulus",
      path: "M.704 0A.704.704 0 000 .704v2.824h5.648a3.064 3.064 0 011.312.36l3.232 1.9a.4.4 0 010 .712l-1.536.904a1.308 1.308 0 01-1.2 0l-1.2-.7a3.084 3.084 0 00-1.316-.36H0v4.236h4.94a3.028 3.028 0 001.316-.36l10.8-6.344a3.008 3.008 0 011.312-.36H24V.692A.704.704 0 0023.296 0zM19.06 6.352a3.084 3.084 0 00-1.316.36l-10.8 6.348a3.064 3.064 0 01-1.312.36H0v4.236h4.94a3.084 3.084 0 001.316-.36l10.8-6.348a3.064 3.064 0 011.312-.36H24V6.352h-3.376zm0 7.072a3.084 3.084 0 00-1.316.36l-10.8 6.344a3.008 3.008 0 01-1.312.36H0v2.824A.708.708 0 00.704 24h22.592a.708.708 0 00.704-.7v-2.824h-5.648a3.008 3.008 0 01-1.312-.36l-3.232-1.896a.4.4 0 010-.716l1.536-.9a1.308 1.308 0 011.2 0l1.2.696a3.028 3.028 0 001.316.36H24v-4.236h-3.376z",
      style: {scale: scrollStimulus}
    },
    {
      name: "heroku",
      path: "M20.61 0H3.39C2.189 0 1.23.96 1.23 2.16v19.681c0 1.198.959 2.159 2.16 2.159h17.22c1.2 0 2.159-.961 2.159-2.159V2.16C22.77.96 21.811 0 20.61 0zm.96 21.841c0 .539-.421.96-.96.96H3.39c-.54 0-.96-.421-.96-.96V2.16c0-.54.42-.961.96-.961h17.22c.539 0 .96.421.96.961v19.681zM6.63 20.399L9.33 18l-2.7-2.4v4.799zm9.72-9.719c-.479-.48-1.379-1.08-2.879-1.08-1.621 0-3.301.421-4.5.84V3.6h-2.4v10.38l1.68-.78s2.76-1.26 5.16-1.26c1.2 0 1.5.66 1.5 1.26v7.2h2.4v-7.2c.059-.179.059-1.501-.961-2.52zM13.17 7.5h2.4c1.08-1.26 1.62-2.521 1.8-3.9h-2.399c-.241 1.379-.841 2.64-1.801 3.9z",
      style: {scale: scrollHeroku}
    },
    {
      name: "git",
      path: "M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187",
      style: {scale: scrollGit}
    }
  ];

  if (isFetching) {
    return (
      <Spinner />
    );
  };

  return(
    <div >
      <section className='banner-filmdash'>
        <motion.div
          className='top-line-banner'
          initial={{ left: "-35%" }}
          animate={{ left: "100%" }}
          transition={{
            duration: 1, ease: "easeInOut"
          }}
        >
        </motion.div>
        <motion.div
          className='text-banner'
          initial={{ opacity: 0, y: "50%" }}
          animate={{ opacity: 1, y: "0%" }}
          transition={{ duration: 1, ease:"easeInOut", delay: 1 }}
        >
          <h1>FilmDash</h1>
          <h4>Your cinematic journey!</h4>
        </motion.div>
        <motion.img
          className="background-banner"
          alt='A cinematic projector'
          src={projector}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease:"easeInOut", delay: 1 }}
        />
      </section>

      <motion.div
        className='general-disposition gap-section'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
      >

        <section className='about-section'>
            <div className='about-title'>
              <p>About</p>
            </div>
            <div className='intro-section'>
              <div className='intro-filmdash'>
                <motion.div
                  className='presentation-picture-filmdash'
                  style={{
                    opacity: opacity,
                    x: photoMoveAbout
                  }}
                >
                </motion.div>
                <div className='text-presentation-filmdash'>
                  <svg
                    width="100%"
                    viewBox="0 0 591 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio='none'
                  >
                    <motion.path
                      d="M0 1H295.25H590.5"
                      stroke="var(--font-color)"
                      strokeWidth="0.7"
                      style={{pathLength: pathLengthTop}}
                    />
                  </svg>
                  <motion.div
                    className='begin-presentation-filmdash'
                    style={{
                      opacity
                    }}
                  >
                    <motion.p
                      style={{ x: contentMoveAbout }}
                    >
                      FilmDash is a web application designed for mobile-first experiences,
                      aiming to help working professionals and students (ages 20-50) find tailored
                      entertainment quickly and easily.
                    </motion.p>
                  </motion.div>
                  <svg
                    width="100%"
                    viewBox="0 0 591 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio='none'
                  >
                    <motion.path
                      d="M590.5 1H295.25H0"
                      stroke="var(--font-color)"
                      strokeWidth="0.7"
                      style={{pathLength: pathLengthBottom}}
                    />
                  </svg>
                </div>
              </div>

              <motion.div
                className='development-filmdash'
                style={{opacity: opacitySecond}}
              >
                <div className='development-text-filmdash'>
                  <motion.p
                    style={{x: contentMoveAboutSecond}}
                  >
                    The app was developed as a final
                    project during a 2-month coding bootcamp at Le Wagon, where it was chosen
                    from a pool of ideas and built by a team of 3 developers over a 2-week agile sprint.
                    By using the TMDB API, the app allows you to quickly access a selection of movies, available instantly!
                  </motion.p>
                  <svg
                    width="100%"
                    viewBox="0 0 591 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio='none'
                  >
                    <motion.path
                      d="M150 1H295.25H450.5"
                      stroke="var(--font-color)"
                      strokeWidth="1.5"
                      style={{pathLength: pathLengthSecond}}
                    />
                  </svg>
                </div>
                <motion.div
                  className='development-picture-filmdash'
                  style={{x: contentMoveAboutSecondPhoto}}
                >
                </motion.div>
              </motion.div>
            </div>
        </section>

        <section className='language-used'>
          <p>TECH STACK</p>
          <ul>
            {languagesLogo.map((item,index) => (
              <li className={item.name} key={index}>
                <svg
                  role='img'
                  viewBox="0 0 24 24"
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                    d={item.path}
                    style={item.style}
                  />
                </svg>
              </li>
            ))}
          </ul>
        </section>

        <section className='using'>
          <div className='function-title-filmdash'>
            <p>How do you use it?</p>
          </div>
          <div className='every-function-container'>
            <motion.div
              className='caroussel-container-filmdash'
              style={{scale: scaleCaroussel}}
            >
              <div className='border-caroussel-left'></div>
              <div className='border-caroussel-right'></div>
              <Caroussel />
            </motion.div>

            <div className='separation-function'>
              <div className='line-separation'></div>
            </div>
            <div className='function-filmdash'>
              {filmdashHover.map((item, index) => (
                <motion.div
                  key={index}
                  className={`${item.sectionName}-container`}
                  style={{scale: scalePhones}}
                >
                  <HoverVideoPlayer
                    videoSrc={item.sectionVideo}
                    pausedOverlay={
                      <img
                        src={item.sectionImage}
                        alt={`${item.sectionName}`}
                        className={`${item.sectionName}-image`}
                      />
                    }
                  />
                  <div key={index} className={`${item.sectionName}-infos`}>
                    <p>{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className='button-filmdash-page'>
          <Link to='https://www.filmdash.online/' target='_blank' >
            <button aria-label="Try FilmDash" className='button-try-it'>Try it!</button>
          </Link>
        </section>
      </motion.div>
    </div>
  )
}
export default FilmDash;
