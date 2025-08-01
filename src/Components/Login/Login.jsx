import React, { useState } from 'react';
import './Login.css';
import { motion, AnimatePresence } from 'framer-motion';

const Login = ({ onClose, onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() && password.trim()) {
      onLoginSuccess();
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="login-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="login-modal"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <motion.button
            className="close-btn"
            onClick={onClose}
            whileHover={{ rotate: 90, scale: 1.2 }}
            transition={{ duration: 0.2 }}
          >
            ×
          </motion.button>
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor='email'>Email:</label>
              <input 
                type='email' 
                id='email' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>
            <div className='form-group'>
              <label htmlFor='password'>Password:</label>
              <input 
                type='password' 
                id='password' 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
            </div>
            <motion.button
              type='submit'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="login-submit-btn"
            >
              Login
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Login;
