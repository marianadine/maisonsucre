import React, { useState } from 'react'
import '../styles/Cart.css'
import '../styles/CommonStyles.css'
import { Trash2 } from "lucide-react"

import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems, increaseQty, decreaseQty, deleteItem } = useCart();
  const [selectedPayment, setSelectedPayment] = useState(null);

  const [billingInfo, setBillingInfo] = useState(null);
  const [showModal, setShowModal] = useState(false);

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

  const handlePreOrder = () => {
    if (!billingInfo) {
      setShowModal(true);
      return;
    }
    alert(`Order confirmed for ${billingInfo.name}, total: PHP ${totalPrice}`);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setBillingInfo({
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      street: form.street.value,
      city: form.city.value,
      zip: form.zip.value,
    });
    setShowModal(false);
  };

  const isPreOrderDisabled =
    cartItems.length === 0 || !billingInfo || !selectedPayment;

  return (
    <div>
      <section className='container cart-section'>
        <h1 className='thin-poppins-text'>Your Cart</h1>
        <p className='poppins-text' style={{ marginTop: '-30px', fontSize: '15px', color: '#777', width: '60%' }}>
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
            {billingInfo ? (
              <div className="billing-info">
                <div className="info-row">
                  <span className="label">Name:</span>
                  <span className="value">{billingInfo.name}</span>
                </div>
                <div className="info-row">
                  <span className="label">Phone:</span>
                  <span className="value">{billingInfo.phone}</span>
                </div>

                <div className="info-row">
                  <span className="label">Email:</span>
                  <span className="value">{billingInfo.email}</span>
                </div>
                <div className="info-row">
                  <span className="label">Address:</span>
                  <span className="value">
                    {billingInfo.street}, {billingInfo.city}, {billingInfo.zip}
                  </span>
                </div>
              </div>
            ) : (
              <p
                className="no-info clickable"
                onClick={() => setShowModal(true)}
              >
                No information provided yet. <span className="link-text">Add yours?</span>
              </p>
            )}

            <p style={{ marginBottom: '-15px' }}>
              Number of Items <span>{totalItems}</span>
            </p>
            <p>
              Total <span>PHP {totalPrice}</span>
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
            <button
              className="cartpreorder-btn"
              onClick={handlePreOrder}
              disabled={isPreOrderDisabled}
            >
              Pre-order
            </button>
            {isPreOrderDisabled && (
              <p className="hint-text">
                Please add your personal info, select a payment method, and ensure your cart isn’t empty.
              </p>
            )}

          </div>
        </div>
      </section>

      {/* CONTACT */}
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

      {/* MODAL for Billing Info */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Enter Billing Information</h2>
            <form onSubmit={handleFormSubmit}>

              <label>
                Full Name*
                <input type="text" name="name" required />
              </label>

              <label>
                Email*
                <input type="email" name="email" required />
              </label>

              <label>
                Phone Number*
                <input
                  type="tel"
                  name="phone"
                  placeholder="e.g. 09123456789 or +639123456789"
                  pattern="^(09\d{9}|\+639\d{9})$"
                  required
                />
              </label>

              <label>
                Street Address*
                <input type="text" name="street" placeholder="123 Main St" required />
              </label>

              <label>
                City*
                <input type="text" name="city" placeholder="e.g. Cavite" required />
              </label>

              <label>
                ZIP/Postal Code*
                <input
                  type="text"
                  name="zip"
                  placeholder="e.g. 4102"
                  pattern="\d{4}"
                  maxLength="4"
                  inputMode="numeric"
                  required
                />
              </label>

              <div className="modal-actions">
                <button type="submit">Save</button>
                <button type="button" onClick={() => setShowModal(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart;
