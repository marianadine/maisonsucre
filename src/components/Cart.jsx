import React, { useState, useContext } from 'react'
import '../styles/Cart.css'
import '../styles/CommonStyles.css'
import { Trash2 } from "lucide-react"

import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems, increaseQty, decreaseQty, deleteItem } = useCart();
  const [selectedPayment, setSelectedPayment] = useState(null);

  const parsePrice = (price) => {
    if (!price) return 0;
    return parseFloat(price.replace("PHP", "").trim());
  };

  const totalItems = cartItems?.length
    ? cartItems.reduce((acc, item) => acc + Number(item.qty), 0)
    : 0;

  const totalPrice = cartItems?.length
    ? cartItems.reduce((acc, item) => acc + parsePrice(item.price) * Number(item.qty), 0)
    : 0;

  return (
    <div>
      <section className='container cart-section'>
        <h1 className='thin-poppins-text'>Your Cart</h1>
        <p
          className='poppins-text'
          style={{
            marginTop: '-30px',
            fontSize: '16px',
            color: '#777',
            width: '60%'
          }}
        >
          Shop at our bakery with ease — delicious pastries, freshly made each
          day with the finest ingredients, baked to perfection, and crafted to
          bring warmth and joy to every bite.
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

            {cartItems.length === 0 ? (
              <div className="empty-cart">
                <p>No items added to cart.</p>
              </div>
            ) : (
              cartItems.map((item) => (
                <div className="cart-row" key={item.id}>
                  <div className="product-details">
                    <div className="product-photo">
                      <img src={item.img} alt={item.name} />
                    </div>
                    <div>
                      <h3 className='pastry-item-name'>{item.name}</h3>
                      <p className='pastry-item-desc'>{item.desc}</p>
                    </div>
                  </div>

                  <div className="quantity-controls">
                    <button onClick={() => decreaseQty(item.id)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => increaseQty(item.id)}>+</button>
                  </div>

                  <p>PHP {parsePrice(item.price).toFixed(2)}</p>
                  <p>PHP {(parsePrice(item.price) * Number(item.qty)).toFixed(2)}</p>

                  <Trash2 className="delete-icon" onClick={() => deleteItem(item.id)} />
                </div>
              ))
            )}
          </div>

          {/* RIGHT SIDE: PERSONAL INFO + PAYMENT */}
          <div className="cart-summary">
            <h3>Personal Information</h3>
            <p className='cart-name'><strong>Name</strong><br /> Nadine Rufo</p>

            <h3>Total</h3>
            <p style={{ marginBottom: '-10px' }}>
              Number of Items <span>{totalItems}</span>
            </p>
            <p>
              Price <span>PHP {totalPrice}</span>
            </p>

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
            <button className="cartpreorder-btn" disabled={cartItems.length === 0}>
              Pre-order
            </button>
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
