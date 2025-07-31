import React from 'react';
import './Main.css';
import { flavours } from '../../assets/assets';
import { reviews } from '../../assets/assets';

const Main = () => {
  return (
    <main className="main">
      {/* Hero Section */}
      <section className="main-hero">
        <div className="coverphoto">
          <h1>Experience the Bold Taste</h1>
          <p>
            Discover the refreshing and iconic taste of Cola-Cola, a beverage
            loved around the world.
          </p>
          <button type="button">Shop Now</button>
        </div>
      </section>

      {/* Flavours Section */}
      <section className="main-flavours">
        <p className="flavour-title">Explore Our Flavours</p>
        <div className="flavour-gallery">
          {flavours.map((flavour, index) => (
            <div className="flavour-card" key={index}>
              <img src={flavour.Image} alt={`${flavour.name} Cola flavour`} />
              <p>{flavour.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="main-why">
        <p>Why Choose Us</p>
        <h1>Our Commitment to Excellence</h1>
        <span>
          Discover why Cola-Cola is the world's favourite beverage.
        </span>
        <div className="why-cards">
          <div className="why-card">
            <p>Quality Ingredients</p>
            <span>
              We use only the finest ingredients to create our signature taste.
            </span>
          </div>
          <div className="why-card">
            <p>Unmatched Taste</p>
            <span>
              Our unique blend of flavours delivers a refreshing experience like
              no other.
            </span>
          </div>
          <div className="why-card">
            <p>A Legacy of Refreshment</p>
            <span>
              For generations, Cola-Cola has been a symbol of joy and
              refreshment.
            </span>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="Reviews">
        <h2>Customer Reviews</h2>
        <div className="cus-reviews">
          {reviews.map((review,index)=>(
            <div className="cus-review" key={index}>
              <img src={review.Image} alt={`Customer ${review.name}`} />
              <p>{review.name}</p>
              <span>
                "{review.review}"
              </span>
            </div>
          ))}
        </div>
      </section>
      <section className="Footer">
        <div className="update">
          <h2>Stay Updated</h2>
          <span>Join our mailing list for exclusive offers and new flavour announcements.</span>
          <div className="form-div">
            <form action="">
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
