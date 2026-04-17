import React, { useState } from 'react'
import './Contact.css'
import { validateForm } from '../utils/validation'
import { sendWhatsAppMessage } from '../utils/api'
import { showToast } from '../utils/toast'

export default function Contact(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})
  
 const handleSubmit = (e) => {
  e.preventDefault()

  const { isValid, errors: validationErrors } = validateForm(name, email, msg)

  if (!isValid) {
    setErrors(validationErrors)
    showToast('Please fix the errors in the form', 'error')
    return
  }

  setErrors({})
  setLoading(true)

  try {
    sendWhatsAppMessage(name, email, msg)

    showToast('Redirecting to WhatsApp...', 'success')

    setName('')
    setEmail('')
    setMsg('')
  } catch (error) {
    showToast('Failed to open WhatsApp.', 'error')
  } finally {
    setLoading(false)
  }
}
  
  return (
    <section className="contact section">
      <div className="container">
        <h2>Get in Touch</h2>
        <div className="contact-wrapper">
          
          {/* Left Column - Contact Info */}
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon"><i className="fa fa-map-marker"></i></div>
              <h3>Address</h3>
              <p>Garage <br />Ibadan, Nigeria 200111</p>
            </div>

            <div className="info-card">
              <div className="info-icon"><i className="fa fa-phone"></i></div>
              <h3>Phone</h3>
              <p>+2348147042284<br /><a href="tel:+2348147042284">Call us</a></p>
            </div>

            <div className="info-card">
              <div className="info-icon"><i className="fa fa-envelope"></i></div>
              <h3>Email</h3>
              <p>Gene2612farms@gmail.com<br /><a href="mailto:Gene2612farms@gmail.com">Send email</a></p>
            </div>

            <div className="info-card">
              <div className="info-icon"><i className="fa fa-clock-o"></i></div>
              <h3>Business Hours</h3>
              <p>Monday - Friday: 8:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 4:00 PM<br />Sunday: Closed</p>
            </div>

            <div className="info-card social">
              <h3>Connect With Us</h3>
              <div className="social-links">
                <a href="https://wa.me/2348147042284?text=Hello%20Gene2612%20Farms%2C%20I%20would%20like%20to%20make%20an%20order.%20Please%20provide%20more%20details." target="_blank" rel="noopener noreferrer" title="WhatsApp"><i className="fa fa-whatsapp"></i></a>
                <a href="https://www.facebook.com/ajanitemitopepeter" title="Facebook"><i className="fa fa-facebook"></i></a>
                <a href="https://www.instagram.com/atpeters?igsh=MWIxNGhrOHdrNTFoeA==" title="Instagram"><i className="fa fa-instagram"></i></a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="contact-form-wrapper">
            <div className="form-header">
              <h3>Send us a Message</h3>
              <p>We'd love to hear from you. Send us your questions or feedback.</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input 
                  id="name"
                  type="text"
                  placeholder="Enter Full Name" 
                  value={name} 
                  onChange={e => setName(e.target.value)}
                  className={errors.name ? 'error' : ''}
                  disabled={loading}
                />
                {errors.name && <span className="error-text">{errors.name}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input 
                  id="email"
                  type="email"
                  placeholder="gene2612farms@gmail.com" 
                  value={email} 
                  onChange={e => setEmail(e.target.value)}
                  className={errors.email ? 'error' : ''}
                  disabled={loading}
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea 
                  id="message"
                  placeholder="Tell us more about your inquiry and products you are interested in." 
                  value={msg} 
                  onChange={e => setMsg(e.target.value)}
                  className={errors.message ? 'error' : ''}
                  disabled={loading}
                  rows="5"
                />
                {errors.message && <span className="error-text">{errors.message}</span>}
              </div>
              
              <button type="submit" className="btn" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
