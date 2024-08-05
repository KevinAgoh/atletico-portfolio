import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import { faSoundcloud } from '@fortawesome/free-brands-svg-icons/faSoundcloud';
import { faTelegram } from '@fortawesome/free-brands-svg-icons/faTelegram';
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
            href='https://www.instagram.com/nanji.collective/'
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon icon={faInstagram} size='xl' />
          </a>
        </div>
        <div className='navbar_link'>
          <a
            href='https://soundcloud.com/nanji-collective'
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon icon={faSoundcloud} size='xl' />
          </a>
        </div>
        <div className='navbar_link'>
          <a
            href='https://t.me/+0ngN-XxpiY0wNGVk'
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon icon={faTelegram} size='xl' />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
