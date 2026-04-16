import React from 'react' 
import './About.css'
import aboutImage from '../assets/images/about.jpeg' 

export default function About() {
  return (
    <section className="about section">
      <div className="about-container">

        {/* INTRO - two columns */}
        <div className="about-intro">
      <div className="intro-text">
  <h2>About Gene2612 Farms & Agroservices</h2>
  <br/>
  <p>
    Gene2612 Farms & Agroservices is committed to delivering
    high-quality agricultural produce through sustainable farming
    practices and modern agro-management systems.
  </p>
  <br/>
  <p>
    Our farm combines traditional farming knowledge with innovative 
    techniques to ensure optimal crop yield and superior quality.
    Every produce is carefully nurtured, harvested, and prepared to
    meet international standards of freshness and safety.

</p>
</div>
          <div className="intro-image">
            <img src={aboutImage} alt="Overview of Gene2612 Farms" />
          </div>
        </div>

        {/* MISSION & VISION - cards */}
        {/* <div className="about-mv">
          <div className="mv-card">
            <h4>Our Mission</h4>
            <p>
              To provide fresh, safe, and responsibly cultivated produce
              while contributing to agricultural development and food security.
            </p>
          </div>

          <div className="mv-card">
            <h4>Our Vision</h4>
            <p>
              To become a trusted and innovative agribusiness brand
              recognized for quality, integrity, and sustainability.
            </p>
          </div>
        </div> */}

        {/* WHAT WE DO */}
<div className="what-we-do">
  <h2>Our Services</h2>
  <div className="what-grid">

    <div className="glass-card">
      <h4>Irrigation Setup</h4>
      <p>
        Professional installation of efficient irrigation systems
        designed to optimize water usage, improve crop yield,
        and support year-round farming operations.
      </p>
    </div>

    <div className="glass-card">
      <h4>Sales of Farm Produce</h4>
      <p>
        Supply of fresh, high-quality agricultural produce carefully
        cultivated and harvested to meet market standards for
        households, retailers, and bulk buyers.
      </p>
    </div>

    <div className="glass-card">
      <h4>Training & Consultancy</h4>
      <p>
        Practical agricultural training programs and expert consultancy
        services to guide farmers and agribusiness owners toward
        sustainable and profitable farming practices.
      </p>
    </div>

    <div className="glass-card">
      <h4>Sales of Seedlings & Herbs</h4>
      <p>
        Provision of healthy, high-yield seedlings and quality herbs
        suitable for commercial farming, home gardens, and greenhouse
        cultivation.
      </p>
    </div>

    {/* <div className="glass-card">
      <h4>Farm Management & Support Services</h4>
      <p>
        Comprehensive farm supervision, crop monitoring, and operational
        support services to ensure efficient farm performance, improved
        productivity, and long-term sustainability.
      </p>
    </div> */}

  </div>
</div>
        </div>  
    </section>
  )
}