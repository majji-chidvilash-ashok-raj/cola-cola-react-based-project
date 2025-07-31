import React from 'react'
import './Story.css'
import { team } from '../../assets/assets'

const Story = () => {
  return (
    <main className='story'>
      <section className="main-hero">
        <div className="coverphoto-story">
          <h1>Our Story</h1>
          <p>
           Since 1886, Cola-Cola has been more than just a beverage; it's a symbol of shared moments and refreshing experiences. From a humble pharmacy in Atlanta to a global icon, our journey is filled with innovation, community, and the timeless taste of Cola-Cola.
          </p>
        </div>
      </section>
      <section className='mission'>
        <h2>Our Mission & Vision</h2>
        <span>Our mission is to refresh the world, make a difference, and create value for our stakeholders. We envision a world where our brands are synonymous with quality, sustainability, and the joy of togetherness.</span>
      </section>
      <section className="Reviews">
              <h2>Meet Our Team</h2>
              <div className="cus-reviews">
                {team.map((Team,index)=>(
                  <div className="cus-review" key={index}>
                    <img src={Team.Image} alt={`Team ${Team.name}`} />
                    <p>{Team.name}</p>
                    <span>
                      {Team.position}
                    </span>
                  </div>
                ))}
              </div>
            </section>
            <section className="timeline">
  <h2>Timeline of Our Evolution</h2>
  <div className="timeline-container">
    <div className="timeline-line"></div>

    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <h3>1886: The Beginning</h3>
        <p>Cola-Cola is created by pharmacist Dr. Pemberton in Atlanta.</p>
      </div>
    </div>

    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <h3>1920s: Expansion</h3>
        <p>Cola-Cola expands globally, becoming a household name.</p>
      </div>
    </div>

    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <h3>1980s: Innovation</h3>
        <p>New products and flavors are introduced to meet changing tastes.</p>
      </div>
    </div>

    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <h3>2000s: Sustainability</h3>
        <p>Focus on sustainable practices and environmental responsibility.</p>
      </div>
    </div>
  </div>
</section>

    </main>
  )
}

export default Story
