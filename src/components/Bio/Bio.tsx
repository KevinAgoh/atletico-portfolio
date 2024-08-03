import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import bioImage from './../../assets/atle-2.jpg';
import bioImageMobile from './../../assets/photo_atletico.jpg';
import './bio.css';

const Bio = () => {
  const scrollRef = useRef(null);

  return (
    <div id='bio' ref={scrollRef} style={{ overflow: 'scroll' }}>
      <div className='bio'>
        <h2>Bio</h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ root: scrollRef }}
          transition={{ delay: 1 }}
        >
          Atletico is composed of 3 people. They met a long time ago on Panorama
          Bar’s dancefloor and have been playing music together since then.
          While sharing a broad common base in terms of taste, each member
          infuses their own touch, enabling them to deliver eclectic, dynamic
          sets.
        </motion.p>
      </div>
      <img className='bio-image-desktop' src={bioImage} alt='Atletico trio' />
      <img
        className='bio-image-mobile'
        src={bioImageMobile}
        alt='Atletico trio'
      />
    </div>
  );
};

export default Bio;
