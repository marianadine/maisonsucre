import React from 'react'
import '../styles/Cart.css'
import '../styles/CommonStyles.css'
import { Trash2 } from "lucide-react"

const Cart = () => {
  const cartItems = [
    { name: "Cookies", desc: "Lorem ipsum dolor sit amet, consectetur", price: 129, qty: 3 },
    { name: "Cookies", desc: "Lorem ipsum dolor sit amet, consectetur", price: 129, qty: 3 },
    { name: "Cookies", desc: "Lorem ipsum dolor sit amet, consectetur", price: 129, qty: 3 },
    { name: "Cookies", desc: "Lorem ipsum dolor sit amet, consectetur", price: 129, qty: 3 },
  ]

  const totalItems = cartItems.reduce((acc, item) => acc + item.qty, 0)
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)

  return (
    <div>
      <section className='container cart-section'>
        <h1 className='thin-poppins-text'>Your Cart</h1>
        <p className='poppins-text' style={{ marginTop: '-20px', fontSize: '18px', color: '#777' }}>
          Shop at our bakery with ease — delicious pastries, freshly made, ready for you.
        </p>

        <div className="cart-layout">
          {/* LEFT SIDE: CART TABLE */}
          <div className="cart-table">
            <div className="cart-header">
              <span>Product Details</span>
              <span>Quantity</span>
              <span>Price</span>
              <span>Total</span>
            </div>

            {cartItems.map((item, idx) => (
              <div className="cart-row" key={idx}>
                <div className="product-details">
                  <div className="product-photo"></div>
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>

                <div className="quantity-controls">
                  <button>-</button>
                  <span>{item.qty}</span>
                  <button>+</button>
                </div>

                <p>PHP {item.price}</p>
                <p>PHP {item.price * item.qty}</p>

                <Trash2 className="delete-icon" />
              </div>
            ))}
          </div>

          {/* RIGHT SIDE: PERSONAL INFO + PAYMENT */}
          <div className="cart-summary">
            <h3>Personal Information</h3>
            <p><strong>Name</strong><br /> Nadine Rufo</p>

            <h3>Total</h3>
            <p>Number of Items <span>{totalItems}</span></p>
            <p>Price <span>PHP {totalPrice}</span></p>

            <h3>We Accept</h3>
            <div className="payment-method">Gcash <p>Lorem ipsum dolor sit amet</p></div>
            <div className="payment-method">GoTyme <p>Lorem ipsum dolor sit amet</p></div>
            <div className="payment-method">SeaBank <p>Lorem ipsum dolor sit amet</p></div>

            <button className="preorder-btn">Pre-order</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Cart
