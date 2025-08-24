import React, { useState } from 'react'
import '../styles/Pastries.css'
import '../styles/CommonStyles.css'
import { FaShoppingCart } from "react-icons/fa";
import { ChevronDown, Search } from "lucide-react";

import cookies1 from '../imgs/products/cookie1.png'
import cookies2 from '../imgs/products/cookie2.png'
import cookies3 from '../imgs/products/cookie3.png'
import cookies4 from '../imgs/products/cookie4.png'
import cookies5 from '../imgs/products/cookie5.png'
import cookies6 from '../imgs/products/cookie6.png'

import croissant1 from '../imgs/products/croissant1.png'
import croissant2 from '../imgs/products/croissant2.png'
import croissant3 from '../imgs/products/croissant3.png'
import croissant4 from '../imgs/products/croissant4.png'
import croissant5 from '../imgs/products/croissant5.png'
import croissant6 from '../imgs/products/croissant6.png'

import brownies1 from '../imgs/products/brownies1.png'
import brownies2 from '../imgs/products/brownies2.png'
import brownies3 from '../imgs/products/brownies3.png'

import tiramisu1 from '../imgs/products/tiramisu1.png'
import tiramisu2 from '../imgs/products/tiramisu2.png'

import waffle1 from '../imgs/products/waffle1.png'
import waffle2 from '../imgs/products/waffle2.png'

import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import { useCart } from "../context/CartContext";

const Pastries = () => {
  const cookies = [
    {
      id: "cookie1",
      img: cookies1,
      name: "Dulce De Leche Cookie",
      price: "PHP 129.50",
      desc: "Soft and chewy cookie infused with rich dulce de leche flavor.",
      ingredients: "Flour, Butter, Sugar, Eggs, Dulce de Leche, Vanilla Extract, Baking Soda, Salt",
      allergens: "Gluten, Dairy, Eggs",
      category: "Cookies"
    },
    {
      id: "cookie2",
      img: cookies2,
      name: "Dark Chocolate Macadamia",
      price: "PHP 139.50",
      desc: "Decadent dark chocolate cookie loaded with macadamia nuts.",
      ingredients: "Flour, Butter, Sugar, Eggs, Dark Chocolate, Macadamia Nuts, Cocoa Powder, Baking Soda, Salt",
      allergens: "Gluten, Dairy, Eggs, Tree Nuts",
      category: "Cookies"
    },
    {
      id: "cookie3",
      img: cookies3,
      name: "Chocolate Chip Cookie",
      price: "PHP 119.50",
      desc: "Classic chewy cookie filled with semi-sweet chocolate chips.",
      ingredients: "Flour, Butter, Sugar, Eggs, Semi-Sweet Chocolate Chips, Vanilla Extract, Baking Soda, Salt",
      allergens: "Gluten, Dairy, Eggs",
      category: "Cookies"
    },
    {
      id: "cookie4",
      img: cookies4,
      name: "Red Velvet Cookie",
      price: "PHP 129.00",
      desc: "Soft and velvety cookie with a hint of cocoa and cream cheese flavor.",
      ingredients: "Flour, Butter, Sugar, Eggs, Cream Cheese, Cocoa Powder, Red Food Coloring, Baking Powder, Salt",
      allergens: "Gluten, Dairy, Eggs",
      category: "Cookies"
    },
    {
      id: "cookie5",
      img: cookies5,
      name: "Cookies and Cream Cookie",
      price: "PHP 149.00",
      desc: "Buttery cookie blended with crushed chocolate cookies and white chocolate chunks.",
      ingredients: "Flour, Butter, Sugar, Eggs, White Chocolate, Chocolate Cookies, Vanilla Extract, Baking Soda, Salt",
      allergens: "Gluten, Dairy, Eggs, Soy",
      category: "Cookies"
    },
    {
      id: "cookie6",
      img: cookies6,
      name: "Chocnut Cookie",
      price: "PHP 135.00",
      desc: "Filipino-inspired cookie with nostalgic Chocnut flavor and a soft bite.",
      ingredients: "Flour, Butter, Sugar, Eggs, Chocnut, Cocoa Powder, Baking Soda, Vanilla Extract, Salt",
      allergens: "Gluten, Dairy, Eggs, Peanuts",
      category: "Cookies"
    },
  ];

  const croissants = [
    {
      id: "croissant1",
      img: croissant1,
      name: "Cheddar Onion Croissant",
      price: "PHP 89.00",
      desc: "Flaky, buttery croissant layered with savory cheddar cheese and caramelized onions for a rich taste.",
      ingredients: "Flour, Butter, Yeast, Milk, Sugar, Salt, Cheddar Cheese, Caramelized Onions",
      allergens: "Gluten, Dairy",
      category: "Croissants"
    },
    {
      id: "croissant2",
      img: croissant2,
      name: "Banana Chocolate Croissant",
      price: "PHP 99.00",
      desc: "Golden croissant filled with sweet banana slices and rich chocolate for a perfect morning indulgence.",
      ingredients: "Flour, Butter, Yeast, Milk, Sugar, Salt, Bananas, Chocolate",
      allergens: "Gluten, Dairy",
      category: "Croissants"
    },
    {
      id: "croissant3",
      img: croissant3,
      name: "Ube Almond Croissant",
      price: "PHP 109.00",
      desc: "A flaky croissant filled with creamy ube and topped with almond paste and slices for nutty sweetness.",
      ingredients: "Flour, Butter, Yeast, Milk, Sugar, Salt, Ube Halaya, Almond Paste, Almond Slices",
      allergens: "Gluten, Dairy, Tree Nuts",
      category: "Croissants"
    },
    {
      id: "croissant4",
      img: croissant4,
      name: "Butter Croissant",
      price: "PHP 129.00",
      desc: "Light, airy, and perfectly layered croissant made with rich butter that melts with every flaky bite.",
      ingredients: "Flour, Butter, Yeast, Milk, Sugar, Salt",
      allergens: "Gluten, Dairy",
      category: "Croissants"
    },
    {
      id: "croissant5",
      img: croissant5,
      name: "Pistachio Croissant",
      price: "PHP 119.00",
      desc: "Flaky croissant generously filled with pistachio cream and topped with crushed nuts for extra crunch.",
      ingredients: "Flour, Butter, Yeast, Milk, Sugar, Salt, Pistachios, Pistachio Paste",
      allergens: "Gluten, Dairy, Tree Nuts",
      category: "Croissants"
    },
    {
      id: "croissant6",
      img: croissant6,
      name: "Coffee Croissant",
      price: "PHP 135.00",
      desc: "A buttery croissant infused with bold coffee flavor, pairing perfectly with its soft, flaky layers.",
      ingredients: "Flour, Butter, Yeast, Milk, Sugar, Salt, Coffee Extract",
      allergens: "Gluten, Dairy",
      category: "Croissants"
    },
  ];

  const brownies = [
    {
      id: "brownie1",
      img: brownies1,
      name: "Classic Brownie",
      price: "PHP 79.00",
      desc: "Our timeless classic — a rich and fudgy chocolate brownie with a chewy bite that melts in your mouth.",
      ingredients: "Flour, Butter, Sugar, Eggs, Cocoa Powder, Dark Chocolate, Vanilla Extract, Salt",
      allergens: "Gluten, Dairy, Eggs, Soy",
      category: "Brownies"
    },
    {
      id: "brownie2",
      img: brownies2,
      name: "Tiramisu Brownie",
      price: "PHP 89.00",
      desc: "Layers of coffee-infused brownie and mascarpone cream create a decadent twist on the Italian favorite.",
      ingredients: "Flour, Butter, Sugar, Eggs, Cocoa Powder, Coffee, Mascarpone, Vanilla Extract",
      allergens: "Gluten, Dairy, Eggs",
      category: "Brownies"
    },
    {
      id: "brownie3",
      img: brownies3,
      name: "S'mores Brownie",
      price: "PHP 95.00",
      desc: "A fudgy brownie topped with toasted marshmallows and crunchy graham crackers for a campfire treat.",
      ingredients: "Flour, Butter, Sugar, Eggs, Cocoa Powder, Dark Chocolate, Marshmallows, Graham Crackers",
      allergens: "Gluten, Dairy, Eggs, Soy",
      category: "Brownies"
    },
  ];

  const tiramisu = [
    {
      id: "tiramisu1",
      img: tiramisu1,
      name: "Classic Tiramisu",
      price: "PHP 199.00",
      desc: "Layers of espresso-soaked ladyfingers with creamy mascarpone and cocoa topping.",
      ingredients: "Ladyfingers, Espresso, Mascarpone, Sugar, Eggs, Cocoa Powder, Cream",
      allergens: "Gluten, Dairy, Eggs",
      category: "Tiramisu"
    },
    {
      id: "tiramisu2",
      img: tiramisu2,
      name: "Matcha Tiramisu",
      price: "PHP 209.00",
      desc: "Light and fluffy tiramisu made with matcha powder for a unique earthy sweetness.",
      ingredients: "Ladyfingers, Matcha Powder, Mascarpone, Sugar, Eggs, Cream",
      allergens: "Gluten, Dairy, Eggs",
      category: "Tiramisu"
    },
  ];

  const waffles = [
    {
      id: "waffle1",
      img: waffle1,
      name: "Classic Stroopwafel",
      price: "PHP 149.00",
      desc: "Thin caramel-filled waffle cookies with a chewy center and crisp golden edges.",
      ingredients: "Flour, Butter, Sugar, Eggs, Milk, Yeast, Caramel Filling",
      allergens: "Gluten, Dairy, Eggs",
      category: "Waffles"
    },
    {
      id: "waffle2",
      img: waffle2,
      name: "Almond Chocolate Stroopwafel",
      price: "PHP 159.00",
      desc: "Crunchy waffle layered with gooey caramel and topped with almonds and chocolate.",
      ingredients: "Flour, Butter, Sugar, Eggs, Milk, Yeast, Caramel Filling, Almonds, Chocolate",
      allergens: "Gluten, Dairy, Eggs, Tree Nuts",
      category: "Waffles"
    },
  ];

  const allPastries = [...cookies, ...croissants, ...brownies, ...tiramisu, ...waffles];

  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, content: null });

  const filteredPastries = allPastries.filter((item) => {
    const matchesCategory = filterCategory === "All" || item.category === filterCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleMouseMove = (e, item) => {
    setTooltip({
      visible: true,
      x: e.pageX + 15,
      y: e.pageY + 15,
      content: (
        <div>
          <h4>Ingredients:</h4>
          <p>{item.ingredients}</p>
          <h4>Allergens:</h4>
          <p>{item.allergens}</p>
        </div>
      )
    });
  };

  const handleMouseLeave = () => {
    setTooltip({ ...tooltip, visible: false });
  };

  const { addToCart } = useCart();

  const handleAddToCart = (pastry) => {
    addToCart(pastry);
  };

  return (
    <div>
      {/* Search and Filter */}
      <div className="pastry-controls">
        <div className="search-wrapper">
          <Search className="search-icon" />
          <input
            type="text"
            placeholder="Search pastries..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="custom-select-wrapper">
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="custom-select"
          >
            <option value="All">All</option>
            <option value="Cookies">Cookies</option>
            <option value="Croissants">Croissants</option>
            <option value="Brownies">Brownies</option>
            <option value="Tiramisu">Tiramisu</option>
            <option value="Waffles">Waffles</option>
          </select>
          <ChevronDown className="custom-select-icon" />
        </div>
      </div>

      {/* Display Grid */}
      <section className="container pastries">
        <h1 className="poppins-text pastries" style={{ marginLeft: '350px', fontSize: '48px', fontWeight: '200' }}>
          {filterCategory === "All" ? "All Pastries" : filterCategory}
        </h1>
        <div className="pastry-grid">
          {filteredPastries.map((item, index) => (
            <div
              className="pastry-item tooltip-wrapper"
              key={index}
              onMouseMove={(e) => handleMouseMove(e, item)}
              onMouseLeave={handleMouseLeave}
            >
              <img src={item.img} alt={item.name} />

              <div className="pastry-info">
                <h2>{item.name}</h2>
                <p className="price">{item.price}</p>
              </div>

              <p className='pastry-desc'>{item.desc}</p>

              <button
                className="add-to-cart-btn"
                onClick={() => addToCart(item)}
                aria-label={`Add ${item.name} to cart`}
              >
                <FaShoppingCart />
              </button>

            </div>
          ))}

        </div>
      </section>

      <section style={{ marginTop: '-450px', zIndex: '-1' }} className='container'>
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

      {/* Tooltip floating */}
      {tooltip.visible && (
        <div
          className="tooltip-box"
          style={{ top: tooltip.y, left: tooltip.x, position: "absolute" }}
        >
          {tooltip.content}
        </div>
      )}
    </div>
  );
};
export default Pastries;
