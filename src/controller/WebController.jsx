// WebController.js
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "../components/Home";
import About from "../components/About";
import Navbar from "../components/Navbar";
import Pastries from "../components/Pastries";
import Cart from "../components/Cart";
import LoadingScreen from "../components/LoadingScreen";
import ScrollToTop from "../controller/ScrollToTop";
import ScrollToTopButton from "../controller/ScrollToTopButton";
import '../styles/CommonStyles.css';

function WebController() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const [cartItems, setCartItems] = useState([]);

  // Add item to cart
  const addToCart = (item) => {
    setCartItems((prev) => {
      const existing = prev.find((x) => x.id === item.id);
      if (existing) {
        return prev.map((x) =>
          x.id === item.id ? { ...x, qty: x.qty + 1 } : x
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  // Increase item qty
  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  // Decrease item qty
  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
      )
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 1000);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className={`loading-wrapper ${fadeOut ? 'fade' : ''}`}>
        <LoadingScreen />
      </div>
    );
  }

  return (
    <>
      <Navbar cartCount={cartItems.length} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pastry" element={<Pastries addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              increaseQty={increaseQty}
              decreaseQty={decreaseQty}
            />
          }
        />
      </Routes>
      <ScrollToTopButton />
    </>
  );
}

export default WebController;
