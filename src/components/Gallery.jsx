import React, { useState } from 'react'
import './Gallery.css'
import { galleryImages } from '../assets/images'

export default function Gallery() {
  const [modal, setModal] = useState({ open: false, currentIndex: 0 })

  const openModal = (index) => setModal({ open: true, currentIndex: index })
  const closeModal = () => setModal({ open: false, currentIndex: 0 })

  const prevImage = () => {
    setModal((prev) => ({
      ...prev,
      currentIndex:
        prev.currentIndex === 0 ? galleryImages.length - 1 : prev.currentIndex - 1,
    }))
  }

  const nextImage = () => {
    setModal((prev) => ({
      ...prev,
      currentIndex:
        prev.currentIndex === galleryImages.length - 1 ? 0 : prev.currentIndex + 1,
    }))
  }

  return (
    <section className="gallery section">
      <div className="container">
        <h2>Gallery</h2>
        <div className="gallery-grid fade-in">
          {galleryImages.map((img, idx) => (
            <div className="gallery-card" key={idx} onClick={() => openModal(idx)}>
              <img src={img.src} alt={img.alt} />
            </div>
          ))}
        </div>

        {modal.open && (
          <div className="gallery-modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-prev" onClick={prevImage}>‹</button>
              <img
                src={galleryImages[modal.currentIndex].src}
                alt={galleryImages[modal.currentIndex].alt}
              />
              <p>{galleryImages[modal.currentIndex].desc}</p>
              <button className="modal-next" onClick={nextImage}>›</button>
              <button className="modal-close" onClick={closeModal}>✕</button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}