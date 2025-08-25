import React, { createContext, useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [popup, setPopup] = useState({ message: "", count: 0 });

  const showPopup = (message, withCounter = false) => {
    setPopup((prev) => {
      if (withCounter && prev.message === message) {
        return { message, count: prev.count + 1 };
      }
      return { message, count: 1 };
    });

    setTimeout(() => setPopup({ message: "", count: 0 }), 3000);
  };

  const addToCart = (item) => {
    setCartItems((prev) => {
      const existingItem = prev.find((i) => i.id === item.id);
      if (existingItem) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, qty: i.qty + 1 } : i
        );
      } else {
        return [...prev, { ...item, qty: 1 }];
      }
    });

    showPopup(`${item.name} added to cart!`, true);
  };

  const deleteItem = (id) => {
    setCartItems((prev) => {
      const removedItem = prev.find((i) => i.id === id);
      if (removedItem) {
        showPopup(`${removedItem.name} removed from cart!`, false);
      }
      return prev.filter((i) => i.id !== id);
    });
  };

  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((i) =>
        i.id === id ? { ...i, qty: i.qty + 1 } : i
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((i) =>
        i.id === id && i.qty > 1 ? { ...i, qty: i.qty - 1 } : i
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, deleteItem, increaseQty, decreaseQty }}
    >
      {children}

      <AnimatePresence>
        {popup.message && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              bottom: "20px",
              right: "20px",
              background: "#333",
              color: "#fff",
              padding: "12px 20px",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              fontSize: "14px",
              zIndex: 9999
            }}
          >
            {popup.message} {popup.count > 1 && `(x${popup.count})`}
          </motion.div>
        )}
      </AnimatePresence>
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
