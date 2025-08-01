import React, { useEffect, useRef } from 'react';
import './Contact.css';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const Contact = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    gsap.from(headingRef.current, {
      y: -20,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    });
  }, []);

  const inputVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5 },
    }),
  };

  return (
    <main className='main'>
      <section className='contact'>
        <div className='contact-heading' ref={headingRef}>
          <h1>Contact Us</h1>
          <p>
            We're here to help! Reach out with any questions, feedback, or inquiries. Our team is dedicated to providing prompt and helpful assistance.
          </p>
        </div>

        <form className='contact-form'>
          <label>Name</label>
          <motion.input
            type='text'
            placeholder='Your Name'
            variants={inputVariants}
            initial="hidden"
            animate="visible"
            custom={0}
          />

          <label>Email</label>
          <motion.input
            type='email'
            placeholder='Your Email'
            variants={inputVariants}
            initial="hidden"
            animate="visible"
            custom={1}
          />

          <label>Message</label>
          <motion.textarea
            placeholder='Message'
            variants={inputVariants}
            initial="hidden"
            animate="visible"
            custom={2}
          />

          <motion.button
            type='submit'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          >
            Submit
          </motion.button>
        </form>
      </section>

      <motion.section
        className='contact-info'
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Contact Information</h2>
        <p>If you have any questions, feel free to reach out to us at:</p>
        <p>Email: support@cola-cola.com</p>
        <p>Phone: 1-800-123-4567</p>
      </motion.section>

      <motion.section
        className='connect'
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Connect with Us</h2>
        <p>Follow us on our social media channels:</p>
        <ul>
          <li><a href='https://www.linkedin.com/in/chidvilash-ashok-raj-majji-988502324/'>LinkedIn</a></li>
          <li><a href='https://github.com/majji-chidvilash-ashok-raj'>Github</a></li>
        </ul>
      </motion.section>
    </main>
  );
};

export default Contact;
