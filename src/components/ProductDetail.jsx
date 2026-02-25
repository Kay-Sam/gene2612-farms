import React, { useState, useEffect } from 'react'
import './ProductDetail.css'
import { addToCart } from '../utils/cart'
import { showToast } from '../utils/toast'

export default function ProductDetail({ product, onClose }) {
  const [activeImage, setActiveImage] = useState(null)

  useEffect(() => {
    if (product?.images?.length) {
      setActiveImage(product.images[0])
    }
  }, [product])

  if (!product) return null

  const handleAddToCart = () => {
    if (!product.inStock) {
      showToast(
        'This product is currently out of stock. Please use "Notify Me" to get updates.',
        'info'
      )
      return
    }
    try {
      addToCart(product)
      showToast(`${product.name} added to cart!`, 'success')
    } catch (error) {
      showToast('Error processing order', 'error')
    }
  }

  const formatDate = (dateStr) => {
    if (!dateStr) return null
    const date = new Date(dateStr)
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    })
  }

  const handleNotifyMe = () => {
    const availableDate = product.availableDate
      ? formatDate(product.availableDate)
      : 'soon'

    const message = `Hi! Please notify me when ${product.name} is back in stock (expected ${availableDate})`
    const whatsappUrl = `https://wa.me/2348147042284?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    showToast('Opening WhatsApp to notify you about this product!', 'info')
  }

  return (
    <div className="product-detail-overlay" onClick={onClose}>
      <div className="product-detail-modal" onClick={(e) => e.stopPropagation()}>
        
        <button className="close-btn" onClick={onClose}>
          <i className="fa fa-times"></i>
        </button>

        <div className="detail-container">

          {/* ✅ IMAGES SECTION */}
          <div className="detail-images">
            <div className="main-image">
              {activeImage && (
                <img src={activeImage} alt={product.name} />
              )}
            </div>

            <div className="thumbnail-gallery">
              {product.images?.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${product.name}-${index}`}
                  className={activeImage === img ? 'thumb-active' : ''}
                  onClick={() => setActiveImage(img)}
                />
              ))}
            </div>
          </div>

          {/* DETAILS SECTION */}
          <div className="detail-info">
            <h2>{product.name}</h2>
            <p className="detail-desc">{product.desc}</p>

            <div className="detail-price">
              {/* <span className="price">{product.price}</span> */}
              <span className={`stock ${product.inStock ? 'in-stock' : 'out-of-stock'}`}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>

            {!product.inStock && product.availableDate && (
              <div className="availability-notice">
                <i className="fa fa-calendar"></i>
                <span>Available {formatDate(product.availableDate)}</span>
              </div>
            )}

            <div className="detail-features">
              <h4>Product Features</h4>
              <ul>
                <li><i className="fa fa-check"></i> 100% Organic & Fresh</li>
                <li><i className="fa fa-check"></i> Locally Sourced</li>
                <li><i className="fa fa-check"></i> No Pesticides</li>
                <li><i className="fa fa-check"></i> Direct from Farm</li>
              </ul>
            </div>

            <div className="detail-actions">
              {product.inStock ? (
                <>
                  <button className="btn btn-primary" onClick={handleAddToCart}>
                    <i className="fa fa-shopping-cart"></i>
                    Add to Cart
                  </button>
                  <button className="btn btn-secondary" onClick={onClose}>
                    Continue Shopping
                  </button>
                </>
              ) : (
                <>
                  <button className="btn btn-notify" onClick={handleNotifyMe}>
                    <i className="fa fa-bell"></i>
                    Notify Me
                  </button>
                  <button className="btn btn-secondary" onClick={onClose}>
                    Continue Shopping
                  </button>
                </>
              )}
            </div>

            <div className="detail-meta">
              <p><strong>Quantity:</strong> 1 Unit</p>
              <p><strong>Delivery:</strong> Same Day Available</p>
              {/* <p><strong>Returns:</strong> 7 Day Guarantee</p> */}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}