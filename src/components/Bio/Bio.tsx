import { motion } from 'framer-motion';
import React from 'react';
import './bio.css';

const Bio = () => {
  const bio =
    `Atletico is composed of 3 friends. They fell in love a long time ago on the dancefloor when the blinds opened up on a unday morning. They have been digging and playing music together since then. While sharing a broad common base in terms of taste, each member infuses their own touch, enabling them to deliver eclectic and dynamic sets`.split(' ');

  return (
    <div id='bio'>
      <div className='bio'>
        {bio.map((letter, index) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.50,
              delay: index / 10
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
    </div>
  );
};

export default Bio;
