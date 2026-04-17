import React, { useState, useEffect } from 'react'
import './Hero.css'
import { hero1, hero2, hero3 } from '../assets/images'
import { showToast } from '../utils/toast'

export default function Hero() {

  //farm slides
const slides = [
  {
    image: hero1,
    title: "Organic Farm Produce You Can Trust",
    text: "Sweet, healthy, and chemical-free"
  },
  {
    image: hero2,
        title: "Good for You, Good for the Planet",
    text: "Naturally grown and harvested daily"
  },
  {
    image: hero3,
    title: "Eat Fresh. Live Healthy.",
    text: "Quality food straight from our farm"
  }
]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Auto slide (with pause on hover)
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isPaused, slides.length])

  // Navigation
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    )
  }

  //  CTA
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
    <section
      className="hero section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >

      {/*  Background Images */}
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide.image}
          alt={slide.title}
          className={`hero-bg ${index === currentIndex ? 'active' : ''}`}
        />
      ))}

      <div className="hero-overlay"></div>

      {/*  Content */}
      <div key={currentIndex} className="hero-inner container">
        <h1>{slides[currentIndex].title}</h1>
        <p>{slides[currentIndex].text}</p>
        <button className="btn" onClick={handleShopNow}>
           Explore Products
        </button>
      </div>


      {/*  Dots */}
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={index === currentIndex ? 'dot active' : 'dot'}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

    </section>
  )
}