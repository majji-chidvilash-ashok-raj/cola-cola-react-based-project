import React, { useEffect } from 'react';
import './Sustainability.css';
import { Practices } from '../../assets/assets';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Sustainability = () => {

  useEffect(() => {
    // Hero Text Animation
    gsap.from('.coverphoto-sus h1', {
      y: -50,
      opacity: 0,
      duration: 1,
    });

    gsap.from('.coverphoto-sus p', {
      y: 30,
      opacity: 0,
      duration: 1,
      delay: 0.3,
    });

    gsap.from('.coverphoto-sus button', {
      scale: 0.8,
      opacity: 0,
      duration: 1,
      delay: 0.6,
    });

    // Practice Cards
    gsap.from('.practice-card', {
      scrollTrigger: {
        trigger: '.practice-cards',
        start: 'top 85%',
      },
      opacity: 0,
      y: 40,
      duration: 0.6,
      stagger: 0.2,
    });

    // Timeline Items
    gsap.from('.timeline-item', {
      scrollTrigger: {
        trigger: '.timeline-container',
        start: 'top 85%',
      },
      opacity: 0,
      x: -50,
      duration: 0.8,
      stagger: 0.3,
    });

    // Footer Join Section
    gsap.from('.sus-footer h1', {
      scrollTrigger: {
        trigger: '.sus-footer',
        start: 'top 85%',
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
    });

    gsap.from('.sus-footer p', {
      scrollTrigger: {
        trigger: '.sus-footer',
        start: 'top 85%',
      },
      y: 20,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
    });

    gsap.from('.sus-footer button', {
      scrollTrigger: {
        trigger: '.sus-footer',
        start: 'top 85%',
      },
      scale: 0.9,
      opacity: 0,
      duration: 0.8,
      delay: 0.4,
    });
  }, []);

  return (
    <main className='sustainability'>
      <section className="main-hero">
        <div className="coverphoto-sus">
          <h1>Committed to Greener Future</h1>
          <p>
            At Cola-Cola, we're dedicated to sustainable practices that protect our planet for future generations. Learn about our initiatives and how we're making a difference.
          </p>
          <button type="button">Explore Our Initiatives</button>
        </div>
      </section>

      <section className='practices'>
        <h2>Our Sustainable Practices</h2>
        <div className="practice-cards">
          {Practices.map((practice, index) => (
            <div className="practice-card" key={index}>
              <p>{practice.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section className='manufacturing'>
        <h2>Our Sustainable Manufacturing</h2>
        <div className="timeline-container">
          <div className="timeline-item">
            <div className="icon-box">
              <span className="circle-icon">🌿</span>
              <span className="line" />
            </div>
            <div className="content">
              <h3>Sustainable Sourcing</h3>
              <p>We source our ingredients responsibly, ensuring minimal environmental impact.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="icon-box">
              <span className="circle-icon">⚡</span>
              <span className="line" />
            </div>
            <div className="content">
              <h3>Energy Efficiency</h3>
              <p>Our facilities are designed to maximize energy efficiency and reduce emissions.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="icon-box">
              <span className="circle-icon">🗑️</span>
            </div>
            <div className="content">
              <h3>Waste Reduction</h3>
              <p>We're committed to reducing waste at every stage of production, from packaging to distribution.</p>
            </div>
          </div>
        </div>
      </section>

      <section className='sus-footer'>
        <h1>Join the Movement</h1>
        <p>Every sip supports sustainability. Discover how you can contribute to a healthier planet with Cola-Cola.</p>
        <button>Learn More</button>
      </section>
    </main>
  );
};

export default Sustainability;
