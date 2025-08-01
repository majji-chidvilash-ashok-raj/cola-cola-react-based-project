import React, { useEffect, useRef } from 'react';
import './Story.css';
import { team } from '../../assets/assets';
import gsap from 'gsap';
import { motion } from 'framer-motion';

const Story = () => {
  const storyRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      storyRef.current.querySelectorAll('h1, p'),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.3,
        duration: 1,
        ease: 'power3.out',
      }
    );
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <main className='story'>
      <section className="main-hero">
        <div className="coverphoto-story" ref={storyRef}>
          <h1>Our Story</h1>
          <p>
            Since 1886, Cola-Cola has been more than just a beverage; it's a symbol of shared moments and refreshing experiences. From a humble pharmacy in Atlanta to a global icon, our journey is filled with innovation, community, and the timeless taste of Cola-Cola.
          </p>
        </div>
      </section>

      <motion.section
        className='mission'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={0}
      >
        <h2>Our Mission & Vision</h2>
        <span>
          Our mission is to refresh the world, make a difference, and create value for our stakeholders. We envision a world where our brands are synonymous with quality, sustainability, and the joy of togetherness.
        </span>
      </motion.section>

      <section className="Reviews">
        <h2>Meet Our Team</h2>
        <div className="cus-reviews">
          {team.map((Team, index) => (
            <motion.div
              className="cus-review"
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={index + 1}
            >
              <img src={Team.Image} alt={`Team ${Team.name}`} />
              <p>{Team.name}</p>
              <span>{Team.position}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="timeline">
        <h2>Timeline of Our Evolution</h2>
        <div className="timeline-container">
          <div className="timeline-line"></div>

          {[
            {
              year: '1886: The Beginning',
              text: 'Cola-Cola is created by pharmacist Dr. Pemberton in Atlanta.',
            },
            {
              year: '1920s: Expansion',
              text: 'Cola-Cola expands globally, becoming a household name.',
            },
            {
              year: '1980s: Innovation',
              text: 'New products and flavors are introduced to meet changing tastes.',
            },
            {
              year: '2000s: Sustainability',
              text: 'Focus on sustainable practices and environmental responsibility.',
            },
          ].map((item, idx) => (
            <motion.div
              className="timeline-item"
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={idx}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>{item.year}</h3>
                <p>{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Story;
