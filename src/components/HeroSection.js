import React, { useEffect, useRef } from 'react';

import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import CardsSection from './CardsSection';



export default function HeroSection() {
 // Use useRef to create a reference to the video element

var reactIconLink = '/images/logos/react.png';
var HTMLIconLink = '/images/logos/html.png';
var JavaScriptIconLink = '/images/logos/javascript.png';
var CSSIconLink = '/images/logos/css.png';

 useEffect(() => {
   // Access the video element using the useRef reference
   const vid = document.getElementById('backgroundVideo')

   if (vid) {
     // Set the playback rate to control the speed (1 is normal speed)
     vid.playbackRate = 0.75; // Adjust the value as needed
   }
 }, []); // Empty dependency array ensures this effect runs once after the initial render

  return (
    <div className='hero-container'>
      <video src='/videos/video-2.mp4' id='backgroundVideo' autoPlay loop muted>
      </video>
      <h1>Hello, my name is Julio, and this is my Web Portfolio!</h1>
      {/* <p className='italic-note'>
        Please hire me, this website is amazing! <span className='note'>ฅ^._.^ฅ</span>
      </p> */}
      <div className='aboutme-section'>
        <img src='/images/profile-pic.png' alt='profile' class="profile-picture" />
        <div className='aboutme-text-container'>
          <p>
            This website has been developed using the following technologies:
          </p>
          <div class="skill-container">
            <div class="skill-item">
              <img src={reactIconLink} alt="React Icon" className="skill-icon" />
              <p className="skill-text">React</p>
            </div>
            <div class="skill-item">
              <img src={HTMLIconLink} alt="HTML Icon" className="skill-icon" />
              <p className="skill-text">HTML</p>
            </div>
            <div class="skill-item">
              <img src={JavaScriptIconLink} alt="JavaScript Icon" className="skill-icon" />
              <p className="skill-text">JavaScript</p>
            </div>
            <div class="skill-item">
              <img src={CSSIconLink} alt="CSS Icon" className="skill-icon" />
              <p className="skill-text">CSS</p>
            </div>
          </div>

        </div>
      </div>

    </div>

    



  );

}
