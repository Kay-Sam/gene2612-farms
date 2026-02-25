import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer section">
      <div className="footer-container">
        <div className="footer-about">
          <h3>Gene2612 Farms & AgroServices</h3>
          <p>Providing fresh, high-quality farm produce with sustainable practices.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>Connect With Us</h4>
          <a href="https://wa.me/2348147042284?text=Hello%20Gene2612%20Farms%2C%20I%20would%20like%20to%20make%20an%20order.%20Please%20provide%20more%20details." target="_blank" rel="noopener noreferrer">
            <i className="fa fa-whatsapp"></i>
          </a>
          <a href="https://www.facebook.com/ajanitemitopepeter" target="_blank"><i className="fa fa-facebook"></i></a>
          <a href="https://www.instagram.com/atpeters?igsh=MWIxNGhrOHdrNTFoeA==" target="_blank"><i className="fa fa-instagram"></i></a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Gene2612 Farms & AgroServices. All rights reserved.</p>
      </div>
    </footer>
  )
}