import React, { useState } from 'react'
import './Products.css'
import ProductDetail from './ProductDetail'
import { products } from '../assets/images'
import { addToCart } from '../utils/cart'
import { showToast } from '../utils/toast'

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null)

  const handleOrder = (product) => {
    try {
      addToCart(product)
      showToast(`${product.name} added to cart! Check the cart icon in navbar.`, 'success')
    } catch (error) {
      console.error('Add to cart error:', error)
      showToast('Error adding product to cart', 'error')
    }
  }

  const handleNotifyMe = (product) => {
    const availableDate = product.availableDate
      ? new Date(product.availableDate).toLocaleDateString('en-US', {
          weekday: 'short',
          month: 'short',
          day: 'numeric'
        })
      : 'soon'

    const message = `Hi! Please notify me when ${product.name} is back in stock (expected ${availableDate})`
    const whatsappUrl = `https://wa.me/2348147042284?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    showToast('Opening WhatsApp to notify you about this product!', 'info')
  }

  return (
    <section className="products section">
      <div className="container">
        <h2>Our Products</h2>

        <div className="grid slide-top">
          {products.map((p) => (
            <div className="card" key={p.id}>
              <div style={{ position: 'relative' }}>
                {/* Use first image as thumbnail */}
                <img
                  className="thumb"
                  src={p.images[0]}
                  alt={p.name}
                  onClick={() => setSelectedProduct(p)}
                  style={{ cursor: 'pointer' }}
                />

                <span className={`stock-badge ${p.inStock ? 'in-stock' : ''}`}>
                  {p.inStock ? 'In Stock' : 'Coming Soon'}
                </span>
              </div>

              <h3
                onClick={() => setSelectedProduct(p)}
                style={{ cursor: 'pointer' }}
              >
                {p.name}
              </h3>

              <p>{p.desc}</p>

              <div className="card-footer">
                {/* <span className="price">{p.price}</span> */}

                {p.inStock ? (
                  <button className="btn" onClick={() => handleOrder(p)}>
                    Add to Cart
                  </button>
                ) : (
                  <button
                    className="btn btn-notify"
                    onClick={() => handleNotifyMe(p)}
                  >
                    <i className="fa fa-bell"></i>
                    Notify Me
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  )
}