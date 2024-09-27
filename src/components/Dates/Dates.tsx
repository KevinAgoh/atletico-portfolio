import { motion } from 'framer-motion';
import React from 'react';
import { dateEntries } from './dateEntries'; 
import './dates.css';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    x: -100
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.5, duration: 1 }
  }
};

const DateItem = ({ month, event, location }) => (
  <li className='date'>
    <div className='date-holder'>{month}</div>
    <b>{event}</b>, {location}
  </li>
);

const Dates = () => {
  return (
    <div id='dates' className='dates-container'>
      <h1>Dates</h1>
      <motion.div
        variants={fadeInAnimationVariants}
        initial='initial'
        whileInView='animate'
        viewport={{ once: true }}
      >
        {dateEntries.map(({ year, events }) => (
          <div key={year}>
            <h2>{year}</h2>
            <ul>
              {events.map(({ month, event, location }, index) => (
                <motion.div
                key={`${year}-${event}-${month}-${index}`} 
                variants={{
                    initial: { opacity: 0 },
                    animate: { opacity: 1, transition: { delay: index * 0.1 } }
                  }}
                  initial='initial'
                  whileInView='animate'
                  viewport={{ once: true }}
                >
                  <DateItem month={month} event={event} location={location} />
                </motion.div>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Dates;
