import { motion } from 'framer-motion';
import React from 'react';
import './dates.css';

const Dates = () => {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      x: -100
    },
    animate: () => {
      return {
        opacity: 1,
        x: 0,
        transition: { delay: 0.5, duration: 1 }
      };
    }
  };
  return (
    <div id='dates' className='dates-container'>
      <h1>Dates</h1>
      <motion.div
        variants={fadeInAnimationVariants}
        initial='initial'
        whileInView='animate'
        viewport={{ once: true }}
      >
        <h2>2024</h2>
        <ul>
          <li className='date'>
            <div className='date-holder'>Dec</div>
            <b>Renate</b>, Berlin, DE
          </li>
        </ul>
        <h2>2023</h2>
        <ul>
          <li className='date'>
            <div className='date-holder'>Nov</div>
            <b>Watergate</b>, Berlin, DE
          </li>
          <li className='date'>
            <div className='date-holder'>Oct</div>
            <b>Crack Bellmer</b>, Berlin, DE
          </li>
          <li className='date'>
            <div className='date-holder'>Oct</div>
            <b>Bus Terraza</b>, Barcelona, SP
          </li>
          <li className='date'>
            <div className='date-holder'>Jul</div>
            <b>Watergate</b>, Berlin, DE
          </li>
          <li className='date'> 
            <div className='date-holder'>May</div>
            <b>Radiant Act</b>, Château de Marcoux, FR
          </li>
          <li className='date'> 
            <div className='date-holder'>May</div>
            <b>Le Groom</b>, Lyon, FR
          </li>
          <li className='date'>
            <div className='date-holder'>Apr</div>
            <b>Crack Bellmer</b>, Berlin, DE
          </li>
          <li className='date'>
            <div className='date-holder'>Apr</div>
            <b>Zur Klappe</b>, Berlin, DE
          </li>
          <li className='date'>
            <div className='date-holder'>Mar</div>
            <b>Watergate</b>, Berlin, DE
          </li>
          <li className='date'>
            <div className='date-holder'>Mar</div>
            <b>Club Opera</b>, Morzine, FR
          </li>
        </ul>
        <h2>2022</h2>
        <ul>
          <li className='date'>
            <div className='date-holder'>Dec</div>
            <b>Watergate</b>, Berlin, DE
          </li>
          <li className='date'>
            <div className='date-holder'>Oct</div>
            <b>Crack Bellmer</b>, Berlin, DE
          </li>
          <li className='date'>
            <div className='date-holder'>Aug</div>
            <b>Watergate</b>, Berlin DE
          </li>
          <li className='date'> 
            <div className='date-holder'>Jul</div>
            <b>Cafe Borely</b>, Marseille, FR
          </li>
          <li className='date'>
            <div className='date-holder'>Jun</div>
            <b>ÆDEN</b>, Berlin DE
          </li>
          <li className='date'> 
            <div className='date-holder'>May</div>
            <b>Radiant Act</b>, Château de Buoux, FR
          </li>
        </ul>
        <h2>2021</h2>
        <ul>
          <li className='date'>
            <div className='date-holder'>Dec</div>
            <b>HVLV</b>, Kyiv, UA
          </li>
          <li className='date'>
            <div className='date-holder'>Nov</div>
            <b>Christa Kupfer</b>, Berlin, DE
          </li>
          <li className='date'>
            <div className='date-holder'>Sep</div>
            <b>Crack Bellmer</b>, Berlin, DE
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Dates;
