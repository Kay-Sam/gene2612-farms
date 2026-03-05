import React, { useState, useEffect } from 'react'
import './Hero.css'
import { hero1, hero2, hero3 } from '../assets/images'
import { showToast } from '../utils/toast'

export default function Hero(){

  const images = [hero1, hero2, hero3]
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 3000) 

    return () => clearInterval(interval)
  }, [])

  const handleShopNow = () => {
    const el = document.getElementById('products')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    } else {
      showToast('Products section not found — scrolling to top.', 'info')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <section className="hero section">

      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="Fresh farm produce"
          className={`hero-bg ${index === currentIndex ? 'active' : ''}`}
        />
      ))}

      <div className="hero-overlay"></div>

      <div className="hero-inner container">
        <h1>Fresh Produce, Directly From the Farm</h1>
        <p>Organic • Sustainable • Healthy</p>
        <button className="btn" onClick={handleShopNow}>Shop Now</button>
      </div>
    </section>
  )
}