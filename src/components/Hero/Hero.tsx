import React from 'react';
import heroImage from './../../assets/photo_atletico.jpg';
import './hero.css';

const Hero = () => {
  return (
    <div className='hero-container'>
      <img src={heroImage} alt='Atletico trio' className='hero-image' />
    </div>
  );
};

export default Hero;
