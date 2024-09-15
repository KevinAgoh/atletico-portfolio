import { motion } from 'framer-motion';
import React from 'react';
import './bio.css';

const Bio = () => {
  const bio =
    `Atletico is composed of 3 people. They met a long time ago on Panorama
          Bar’s dancefloor and have been playing music together since then.
          While sharing a broad common base in terms of taste, each member
          infuses their own touch, enabling them to deliver eclectic, dynamic
          sets.`.split(' ');

  return (
    <div id='bio'>
      <div className='bio'>
        {bio.map((letter, index) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.1,
              delay: index / 20
            }}
            key={index}
          >
            {letter}{' '}
          </motion.span>
        ))}
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', bounce: 0.25, damping: 10 }}
        ></motion.p>
      </div>
      {/* <img className='bio-image-mobile' src={bioImage} alt='Atletico trio' />
      <img
        className='bio-image-desktop'
        src={bioImageMobile}
        alt='Atletico trio'
      /> */}
    </div>
  );
};

export default Bio;
