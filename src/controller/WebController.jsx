import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Navbar from "../components/Navbar";
import Pastries from "../components/Pastries";
import Cart from "../components/Cart";

function WebController() {
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
