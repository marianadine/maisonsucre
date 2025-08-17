import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "../components/Home";
import About from "../components/About";
import Navbar from "../components/Navbar";
import Pastries from "../components/Pastries";
import Cart from "../components/Cart";
import LoadingScreen from "../components/LoadingScreen";
import '../styles/CommonStyles.css';

function WebController() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // start fade-out
      setTimeout(() => setLoading(false), 1000); // remove after 1s
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
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pastry" element={<Pastries />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default WebController;
