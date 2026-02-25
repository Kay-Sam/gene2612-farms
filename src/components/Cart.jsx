import React, { useState, useEffect } from 'react'
import './Cart.css'
import { getCart, removeFromCart, updateQuantity, clearCart } from '../utils/cart'
import { showToast } from '../utils/toast'

export default function Cart({ onClose }) {
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    updateCart()
  }, [])

  const updateCart = () => {
    const cartItems = getCart()
    setCart(cartItems)
    setTotal(cartItems.length)
  }

  const handleRemove = (productId, productName) => {
    removeFromCart(productId)
    updateCart()
    showToast(`${productName} removed from your selection`, 'info')
  }

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity <= 0) return
    updateQuantity(productId, newQuantity)
    updateCart()
  }

  const handleClearCart = () => {
    if (window.confirm('Are you sure you want to clear your selection?')) {
      clearCart()
      updateCart()
      showToast('Selection cleared', 'info')
    }
  }

  const handleRequestOrder = () => {
    if (cart.length === 0) {
      showToast('Your selection is empty', 'error')
      return
    }

    const items = cart
      .map(item => `• ${item.quantity}x ${item.name}`)
      .join('\n')

    const message = `Hello! I would like to request the following products:\n\n${items}\n\nPlease confirm availability and pricing.`

    window.open(
      `https://wa.me/2348147042284?text=${encodeURIComponent(message)}`,
      '_blank'
    )

    showToast('Opening WhatsApp...', 'success')
  }

  return (
    <div className="cart-page">
      <div className="cart-container">
        <div className="cart-page-header">
          <h1>Your Selection</h1>
          <button className="close-btn" onClick={onClose} title="Close">✕</button>
        </div>

        {cart.length === 0 ? (
          <div className="cart-empty-state">
            <div className="empty-icon"><i className="fa fa-shopping-cart"></i></div>
            <h2>Your Selection is Empty</h2>
            <p>Add fresh produce to get started!</p>
            <button className="btn-primary" onClick={onClose}>Continue Browsing</button>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-items-section">
              <div className="section-header">
                <h2>Items ({total})</h2>
                <button className="clear-btn" onClick={handleClearCart}>Clear Selection</button>
              </div>

              <div className="cart-items-list">
                {cart.map(item => (
                  <div className="cart-item-card" key={item.id}>
                  <div className="item-image">
                    <img src={item.images[0]} alt={item.name} />
                  </div>

                    <div className="item-details">
                      <h3>{item.name}</h3>
                      <p className="item-desc">{item.desc}</p>
                    </div>

                    <div className="item-quantity">
                      <label>Qty</label>
                      <div className="qty-controls">
                        <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>−</button>
                        <input
                          type="number"
                          value={item.quantity}
                          onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 1)}
                          min="1"
                        />
                        <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                      </div>
                    </div>

                    <button
                      className="delete-btn"
                      onClick={() => handleRemove(item.id, item.name)}
                      title="Remove item"
                    >
                      <i className="fa fa-trash"></i>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="cart-summary">
              <div className="summary-box">
                <h2>Summary</h2>
                <div className="summary-row">
                  <span>Items Selected</span>
                  <span>{total}</span>
                </div>

                <div className="summary-row">
                  <span>Delivery</span>
                  <span className="delivery-info">Contact us for details</span>
                </div>

                <button className="checkout-btn" onClick={handleRequestOrder}>
                  <i className="fa fa-whatsapp"></i> Request Order via WhatsApp
                </button>

                <button className="continue-btn" onClick={onClose}>
                  Continue Shopping
                </button>
              </div>

              <div className="info-box">
                <h3> Why Choose Us</h3>
                <ul>
                  <li>100% Fresh & Organic</li>
                  <li>Fast Delivery Available</li>
                  <li>Quality Guaranteed</li>
                  <li>WhatsApp Support 24/7</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}