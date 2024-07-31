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
        <div className='navbar_link'>
          <a href='#photos'>Photos</a>
        </div>
      </div>
      <div className='navbar_section'>
        <div className='navbar_link'>
          <a href='https://www.instagram.com/nanji.collective/'>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
        <div className='navbar_link'>
          <a href='https://soundcloud.com/nanji-collective'>
            <FontAwesomeIcon icon={faSoundcloud} />
          </a>
        </div>
        <div className='navbar_link'>
          <a href='https://t.me/+0ngN-XxpiY0wNGVk'>
            <FontAwesomeIcon icon={faTelegram} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
