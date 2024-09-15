import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import { faSoundcloud } from '@fortawesome/free-brands-svg-icons/faSoundcloud';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav id='navbar'>
      <div className='navbar_section'>
        <div className='navbar_link'>
          <a href='#bio'>Bio</a>
        </div>
        <div className='navbar_link'>
          <a href='#music'>Music</a>
        </div>
        <div className='navbar_link'>
          <a href='#dates'>Dates</a>
        </div>
      </div>
      <div className='navbar_section'>
        <div className='navbar_link'>
          <a
            href='https://ra.co/dj/atletico'
            target='_blank'
            rel='noreferrer'
            style={{ fontWeight: 800, fontSize: 20 }}
          >
            RA
          </a>
        </div>
        <div className='navbar_link'>
          <a
            href='https://www.instagram.com/nanji.collective/'
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon icon={faInstagram} size='xl' />
          </a>
        </div>
        <div className='navbar_link'>
          <a
            href='https://soundcloud.com/atletico-music'
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon icon={faSoundcloud} size='xl' />
          </a>
        </div>
        <div className='navbar_link'>
          <a
            href='mailto:atletico.trio@gmail.com'
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon icon={faEnvelope} size='xl' />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
