import { react } from 'motion/react-client';
import '../../assets/banner.css'
import '../../assets/filmdash.css'
import React from 'react';

function Filmdash() {
  return(
    <div className='filmdash'>
      <h1>FilmDash</h1>
      <h4>Your cinematic journey!</h4>
      <div className='banner-filmdash'></div>
    </div>
  )
}
export default Filmdash;
