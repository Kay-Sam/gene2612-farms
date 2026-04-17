import React from 'react'
import './About.css'
import aboutImage from '../assets/images/about.jpeg'

export default function About() {
  return (
    <section className="about section">
      <div className="about-container">

        {/* INTRO SECTION */}
        <div className="about-intro">

          <div className="intro-text slide-left">
            <h2>About Gene2612 Farms & Agroservices</h2>

            <p>
              Gene2612 Farms & Agroservices is committed to delivering high-quality
              agricultural produce through sustainable farming practices and modern
              agro-management systems.
            </p>

            <p>
              We combine traditional farming knowledge with innovative techniques to
              ensure optimal crop yield and superior quality. Every produce is carefully
              nurtured, harvested, and delivered to meet international standards of
              freshness and safety.
            </p>
          </div>

          <div className="intro-image slide-right">
            <img src={aboutImage} alt="Overview of Gene2612 Farms" />
          </div>

        </div>

        {/* SERVICES SECTION */}
        <div className="what-we-do">

          <h2>Our Services</h2>

          <div className="what-grid slide-top">

            <div className="glass-card">
              <h4>Irrigation Setup</h4>
              <p>
                Professional installation of efficient irrigation systems designed to
                optimize water usage, improve crop yield, and support year-round farming.
              </p>
            </div>

            <div className="glass-card">
              <h4>Sales of Farm Produce</h4>
              <p>
                We supply fresh, high-quality agricultural produce cultivated and
                harvested to meet market standards for households, retailers, and bulk buyers.
              </p>
            </div>

            <div className="glass-card">
              <h4>Training & Consultancy</h4>
              <p>
                Practical agricultural training and expert consultancy services to help
                farmers and agribusiness owners adopt sustainable and profitable farming practices.
              </p>
            </div>

            <div className="glass-card">
              <h4>Seedlings & Herbs Supply</h4>
              <p>
                Provision of healthy, high-yield seedlings and quality herbs suitable for
                commercial farming, home gardens, and greenhouse cultivation.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}