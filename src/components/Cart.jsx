import React, { useState } from 'react'
import '../styles/Cart.css'
import '../styles/CommonStyles.css'
import { Trash2 } from "lucide-react"

import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Cookies", desc: "Chocolate chip cookies freshly baked", price: 159, qty: 3 },
    { id: 2, name: "Brownies", desc: "Rich and fudgy chocolate brownies", price: 129, qty: 2 },
    { id: 3, name: "Croissant", desc: "Buttery and flaky croissant", price: 99, qty: 1 },
    { id: 4, name: "Muffins", desc: "Blueberry muffins with crumble topping", price: 149, qty: 2 },
    { id: 5, name: "Cheesecake", desc: "Creamy cheesecake slice", price: 199, qty: 1 },
    { id: 6, name: "Cinnamon Roll", desc: "Sweet cinnamon swirls with glaze", price: 129, qty: 4 },
    { id: 7, name: "Cupcake", desc: "Vanilla cupcakes with buttercream frosting", price: 89, qty: 5 },
  ])

  const [selectedPayment, setSelectedPayment] = useState(null)


  const increaseQty = (id) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    ))
  }

  const decreaseQty = (id) => {
    setCartItems(cartItems.map(item =>
      item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
    ))
  }

  const deleteItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  const totalItems = cartItems.reduce((acc, item) => acc + item.qty, 0)
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)

  return (
    <div>
      <section className='container cart-section'>
        <h1 className='thin-poppins-text'>Your Cart</h1>
        <p className='poppins-text' style={{ marginTop: '-30px', fontSize: '16px', color: '#777', width: '60%' }}>
          Shop at our bakery with ease — delicious pastries, freshly made each day with the finest ingredients, baked to perfection, and crafted to bring warmth and joy to every bite.
        </p>

        <div className="cart-layout">
          {/* LEFT SIDE: CART TABLE */}
          <div className="cart-table scrollable-cart">
            <div className="cart-header">
              <span>Product Details</span>
              <span>Quantity</span>
              <span>Price</span>
              <span>Total</span>
            </div>

            {cartItems.map((item) => (
              <div className="cart-row" key={item.id}>
                <div className="product-details">
                  <div className="product-photo"></div>
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>

                <div className="quantity-controls">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>

                <p>PHP {item.price}</p>
                <p>PHP {item.price * item.qty}</p>

                <Trash2 className="delete-icon" onClick={() => deleteItem(item.id)} />
              </div>
            ))}
          </div>

          {/* RIGHT SIDE: PERSONAL INFO + PAYMENT */}
          <div className="cart-summary">
            <h3>Personal Information</h3>
            <p><strong>Name</strong><br /> Nadine Rufo</p>

            <h3>Total</h3>
            <p style={{ marginBottom: '-10px' }}>Number of Items <span>{totalItems}</span></p>
            <p>Price <span>PHP {totalPrice}</span></p>

            <h4>We Accept</h4>
            {["Gcash", "GoTyme", "SeaBank"].map((method) => (
              <div
                key={method}
                className={`payment-method ${selectedPayment === method ? "selected" : ""}`}
                onClick={() => setSelectedPayment(method)}
              >
                {method}
                <p>
                  {method === "Gcash" && "Secure and fast mobile payments"}
                  {method === "GoTyme" && "Easy card and wallet integration"}
                  {method === "SeaBank" && "Direct debit from your bank account"}
                </p>
              </div>
            ))}
            <button className="cartpreorder-btn">Pre-order</button>
          </div>
        </div>
      </section>

      <section style={{ marginTop: '-600px', zIndex: '-1' }} className='container'>
        <h1 className='poppins-header inquiry-header'>Contact Us</h1>
        <div className="inquiry-row">
          <p className="inquiry-text">
            For inquiries, special requests, or a taste of Maison Sucré’s newest delights, you can reach us through our social channels below or send us a direct message—we’d love to hear from you.
          </p>

          <div className="inquiry-icons">
            <a href="https://facebook.com/yourpage" aria-label="Facebook" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a href="mailto:hello@maisonsucre.com" aria-label="Gmail">
              <SiGmail />
            </a>
            <a href="https://instagram.com/yourhandle" aria-label="Instagram" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://tiktok.com/@yourhandle" aria-label="TikTok" target="_blank" rel="noreferrer">
              <FaTiktok />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Cart
