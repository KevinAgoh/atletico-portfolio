import { motion } from 'framer-motion';
import React from 'react';
import heroMobile from './../../assets/atle-2.jpg';
import heroImage from './../../assets/photo_atletico.jpg';
import './hero.css';

const Hero = () => {
  const TITLE = 'ATLETICO';

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `2em`
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 3,
        ease: [0.2, 0.65, 0.3, 0.9]
      }
    }
  };

  return (
    <div className='hero-container'>
      <img src={heroImage} alt='Atletico trio' className='hero-desktop' />
      <img src={heroMobile} alt='Atletico trio' className='hero-mobile' />

      <div className='hero-text'>
        {TITLE.split('').map((char, index) => (
          <motion.div
            key={index}
            initial='hidden'
            animate='visible'
            variants={characterAnimation}
            transition={{ delay: index * 0.5 }} // Stagger animation start
          >
            {char}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
