import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faSoundcloud } from '@fortawesome/free-brands-svg-icons/faSoundcloud';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import './navbar.css';

const Navbar = () => {
  const hideNavbarWhenScrolling = () => {
    let previousScrollposition = window.scrollY;
    window.onscroll = function () {
      const currentScrollPosition = window.scrollY;
      const navbar = document.getElementById('navbar');
      if (navbar && previousScrollposition > currentScrollPosition) {
        navbar.style.top = '0';
      } else {
        if (navbar) navbar.style.top = '-120px';
      }
      previousScrollposition = currentScrollPosition;
    };
  };

  useEffect(() => {
    hideNavbarWhenScrolling();
  }, []);

  return (
    <nav id='navbar' role='navigation' aria-label='Main Navigation'>
      <ul className='navbar_section'>
        <li className='navbar_link'>
          <a href='#bio' aria-label='Navigate to Bio section'>
            Bio
          </a>
        </li>
        <li className='navbar_link'>
          <a href='#music' aria-label='Navigate to Music section'>
            Music
          </a>
        </li>
        <li className='navbar_link'>
          <a href='#dates' aria-label='Navigate to Dates section'>
            Dates
          </a>
        </li>
      </ul>
      <ul className='navbar_section'>
        <li className='navbar_link'>
          <a
            href='https://futurefilter.substack.com/p/electronic-musics-social-media-dilemma'
            target='_blank'
            rel='noreferrer'
            aria-label='Visit Instagram profile'
          >
            <FontAwesomeIcon icon={faInstagram} size='xl' />
            <span className='sr-only'>Instagram</span>
          </a>
        </li>
        <li className='navbar_link'>
          <a
            href='https://soundcloud.com/atletico-music'
            target='_blank'
            rel='noreferrer'
            aria-label='Visit SoundCloud profile'
          >
            <FontAwesomeIcon icon={faSoundcloud} size='xl' />
            <span className='sr-only'>SoundCloud</span>
          </a>
        </li>
        <li className='navbar_link'>
          <a
            href='mailto:atletico.trio@gmail.com'
            aria-label='Send an email'
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon icon={faEnvelope} size='xl' />
            <span className='sr-only'>Email</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
