import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = ({ isLoggedIn, onLoginClick, handleShopNow }) => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="/cola png.png" alt="logo" />
      </div>
      <div className='center-nav'>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/story">Our Story</NavLink></li>
          <li><NavLink to="/sustainability">Sustainability</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
        <button onClick={isLoggedIn ? handleShopNow : onLoginClick}>
          {isLoggedIn ? 'Shop Now' : 'Login'}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
