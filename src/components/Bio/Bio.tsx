import { motion } from 'framer-motion';
import React from 'react';
import './bio.css';

const Bio = () => {
  const bio =
    `Atletico is composed of 3 friends. They fell in love a long time ago on the dancefloor when the blinds opened up on a Sunday morning. They have been digging and playing music together since then. While sharing a broad common base in terms of taste, each member infuses their own touch, enabling them to deliver eclectic and dynamic sets.`.split(
      ' '
    );
  return (
    <div id='bio'>
      <div className='bio-text'>
        {bio.map((letter, index) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: index / 10
            }}
            key={index}
          >
            {letter}{' '}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default Bio;
