import React from 'react'
import './Sustainability.css'
import { Practices } from '../../assets/assets'

const Sustainability = () => {
  return (
    <main className='sustainability'>
        <section className="main-hero">
        <div className="coverphoto-sus">
          <h1>Committed to Greener Future</h1>
          <p>
At Cola-Cola, we're dedicated to sustainable practices that protect our planet for future generations. Learn about our initiatives and how we're making a difference.          </p>
<button type="button">Explore Our Initiatives</button>
        </div>
      </section>
      <section className='practices'>
        <h2>Our Sustainable Practices</h2>
        <div className="practice-cards">
          {Practices.map((practice,index)=>(
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
        {/* No line for last item */}
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
  )
}

export default Sustainability
