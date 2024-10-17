import { motion, useCycle } from 'framer-motion';
import React, { useRef } from 'react';
import { useDimensions } from '../../hooks/use-dimensions.ts';
import { MenuToggle } from '../MenuToggle/MenuToggle.tsx';
import { Navigation } from '../Navigation/Navigation.tsx';
import './mobileMenu.css';

const MobileMenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const containerRef = useRef(0);
  const { height } = useDimensions(containerRef);

  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2
      }
    }),
    closed: {
      clipPath: 'circle(30px at 40px 40px)',
      transition: {
        delay: 0.5,
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    }
  };

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      className='mobile-menu'
      ref={containerRef}
      custom={height}
    >
      <motion.div className='background' variants={sidebar} />
      <Navigation toggle={() => toggleOpen()} />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};

export default MobileMenu;
