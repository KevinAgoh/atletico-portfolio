import { motion } from 'framer-motion';
import * as React from 'react';
import { MenuItem } from '../MenuItem/MenuItem.tsx';
import './navigation.css';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const menuElements = [
  { id: 1, title: 'Bio', link: 'bio', newTab: false },
  { id: 2, title: 'Music', link: 'music', newTab: false },
  { id: 3, title: 'Dates', link: 'dates', newTab: false },
  {
    id: 4,
    title: 'Resident Advisor',
    link: 'https://ra.co/dj/atletico',
    newTab: true
  },
  {
    id: 5,
    title: 'Instagram',
    link: 'https://futurefilter.substack.com/p/electronic-musics-social-media-dilemma',
    newTab: true
  },
  {
    id: 6,
    title: 'Soundcloud',
    link: 'https://soundcloud.com/atletico-music',
    newTab: true
  },
  {
    id: 7,
    title: 'Email',
    link: 'mailto:atletico.trio@gmail.com',
    newTab: true
  }
];

export const Navigation = ({ toggle }) => (
  <motion.ul variants={variants} className='menu-items-wrapper'>
    {menuElements.map(element => (
      <MenuItem
        i={element.id}
        key={element.id}
        title={element.title}
        link={element.link}
        toggle={toggle}
        newTab={element.newTab}
      />
    ))}
  </motion.ul>
);
