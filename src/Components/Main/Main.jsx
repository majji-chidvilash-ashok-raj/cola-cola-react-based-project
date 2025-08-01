import React, { useEffect, useRef } from 'react';
import './Main.css';
import { flavours } from '../../assets/assets';
import { reviews } from '../../assets/assets';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const Main = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.from(heroRef.current, {
      opacity: 0,
      y: -30,
      duration: 1.2,
      ease: 'power2.out',
    });
  }, []);

  return (
    <main className="main">
      {/* Hero Section */}
      <section className="main-hero">
        <div className="coverphoto" ref={heroRef}>
          <h1>Experience the Bold Taste</h1>
          <p>
            Discover the refreshing and iconic taste of Cola-Cola, a beverage
            loved around the world.
          </p>
          <motion.button
            type="button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            Shop Now
          </motion.button>
        </div>
      </section>

      {/* Flavours Section */}
      <section className="main-flavours">
        <p className="flavour-title">Explore Our Flavours</p>
        <div className="flavour-gallery">
          {flavours.map((flavour, index) => (
            <motion.div
              className="flavour-card"
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img src={flavour.Image} alt={`${flavour.name} Cola flavour`} />
              <p>{flavour.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="main-why">
        <p>Why Choose Us</p>
        <h1>Our Commitment to Excellence</h1>
        <span>Discover why Cola-Cola is the world's favourite beverage.</span>
        <div className="why-cards">
          {['Quality Ingredients', 'Unmatched Taste', 'A Legacy of Refreshment'].map(
            (title, index) => (
              <motion.div
                className="why-card"
                key={index}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <p>{title}</p>
                <span>
                  {
                    [
                      'We use only the finest ingredients to create our signature taste.',
                      'Our unique blend of flavours delivers a refreshing experience like no other.',
                      'For generations, Cola-Cola has been a symbol of joy and refreshment.',
                    ][index]
                  }
                </span>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="Reviews">
        <h2>Customer Reviews</h2>
        <div className="cus-reviews">
          {reviews.map((review, index) => (
            <motion.div
              className="cus-review"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <img src={review.Image} alt={`Customer ${review.name}`} />
              <p>{review.name}</p>
              <span>"{review.review}"</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <motion.section
        className="Footer"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="update">
          <h2>Stay Updated</h2>
          <span>
            Join our mailing list for exclusive offers and new flavour
            announcements.
          </span>
          <div className="form-div">
            <form action="">
              <input type="email" placeholder="Enter your email" required />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>
      </motion.section>
    </main>
  );
};

export default Main;
