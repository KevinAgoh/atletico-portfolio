import { motion } from 'framer-motion';
import * as React from 'react';
import vinyl from '../../assets/vinyl.png';
import './menuItem.css';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const colors = ['#FF008C', '#D309E1', '#9C1AFF', '#7700FF', '#4400FF'];

export const MenuItem = ({ i, title, link, toggle, newTab }) => {
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.a
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className='menu-element'
      href={`#${link}`}
      aria-label={`Navigate to ${title} section`}
      onClick={() => toggle(false)}
      target={newTab ? '_blank' : undefined}
      rel={newTab ? 'noreferrer' : undefined}
    >
      <img src={vinyl} alt='vinyl icon' className='icon' style={style} />
      <div>{title}</div>
    </motion.a>
  );
};
