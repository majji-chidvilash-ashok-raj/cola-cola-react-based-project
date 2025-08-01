import React, { useEffect, useRef } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const Navbar = ({ isLoggedIn, onLoginClick, handleShopNow }) => {
  const logoRef = useRef(null);

  useEffect(() => {
    gsap.from(logoRef.current, {
      duration: 1,
      opacity: 0,
      y: -50,
      ease: 'power3.out'
    });
  }, []);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut'
      }
    })
  };

  return (
    <div className="navbar">
      <div className="logo" ref={logoRef}>
        <img src="/cola png.png" alt="logo" />
      </div>
      <div className="center-nav">
        <ul>
          {['/', '/story', '/sustainability', '/contact'].map((path, index) => {
            const labels = ['Home', 'Our Story', 'Sustainability', 'Contact'];
            return (
              <motion.li
                key={path}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={navVariants}
              >
                <NavLink to={path}>{labels[index]}</NavLink>
              </motion.li>
            );
          })}
        </ul>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          onClick={isLoggedIn ? handleShopNow : onLoginClick}
        >
          {isLoggedIn ? 'Shop Now' : 'Login'}
        </motion.button>
      </div>
    </div>
  );
};

export default Navbar;
