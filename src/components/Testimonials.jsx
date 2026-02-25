import React, { useState, useEffect } from 'react'
import './Testimonials.css'

const reviews = [
  { id: 1, name: 'Paul', text: "Best produce I've bought! Fresh and organic every time." },
  { id: 2, name: 'John', text: 'Very fast delivery and excellent packaging.' },
  { id: 3, name: 'Amina', text: 'Highly recommend Gene2612 Farms. Quality is top-notch.' },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % reviews.length)
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  return (
    <section className="testimonials section">
      <div className="container">
        <h2>What Our Customers Say</h2>

        <div className="testimonial-slider">
          
          <button className="arrow left" onClick={prevSlide}>
            &#10094;
          </button>

          <div className="testimonial-card">
            <blockquote>“{reviews[current].text}”</blockquote>
            <h4>- {reviews[current].name}</h4>
          </div>

          <button className="arrow right" onClick={nextSlide}>
            &#10095;
          </button>

        </div>

        {/* Dots */}
        <div className="dots">
          {reviews.map((_, index) => (
            <span
              key={index}
              className={current === index ? 'dot active' : 'dot'}
              onClick={() => setCurrent(index)}
            ></span>
          ))}
        </div>

      </div>
    </section>
  )
}