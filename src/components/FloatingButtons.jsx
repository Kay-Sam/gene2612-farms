import React, { useState, useEffect } from 'react'
import './FloatingButtons.css'

export default function FloatingButtons() {
  const [visible, setVisible] = useState(false)

useEffect(() => {
  const handleScroll = () => {
    const hero = document.getElementById('hero')
    if (!hero) return

    const heroBottom = hero.getBoundingClientRect().bottom
    // trigger when hero is 50% scrolled out
    setVisible(heroBottom < hero.offsetHeight * 0.9)
  }

  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
}, [])
  if (!visible) return null // don’t render if not visible yet

  return (
    <div className="floating-buttons">
      <a 
        href="https://wa.me/2348147042284?text=Hello%20Gene2612%20Farms%2C%20I%20would%20like%20to%20make%20an%20order.%20Please%20provide%20more%20details." 
        target="_blank" 
        rel="noopener noreferrer"
        className="floating-btn whatsapp"
        title="Chat with us on WhatsApp"
      >
        <i className="fa fa-whatsapp"></i>
      </a>

      <button 
        className="floating-btn top" 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        title="Back to top"
      >
        <i className="fa fa-chevron-up"></i>
      </button>
    </div>
  )
}