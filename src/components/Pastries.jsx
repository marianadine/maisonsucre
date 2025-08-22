import React, { useState } from 'react'
import '../styles/Pastries.css'
import '../styles/CommonStyles.css'
import { FaCartPlus } from "react-icons/fa";
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

const Pastries = () => {
  const cookies = [
    {
      img: cookies1,
      name: "Dulce De Leche Cookie",
      price: "PHP 129.50",
      desc: "Soft and chewy cookie infused with rich dulce de leche flavor.",
      category: "Cookies"
    },
    {
      img: cookies2,
      name: "Dark Chocolate Macadamia",
      price: "PHP 139.50",
      desc: "Decadent dark chocolate cookie loaded with macadamia nuts.",
      category: "Cookies"
    },
    {
      img: cookies3,
      name: "Chocolate Chip Cookie",
      price: "PHP 119.50",
      desc: "Classic chewy cookie filled with semi-sweet chocolate chips.",
      category: "Cookies"
    },
    {
      img: cookies4,
      name: "Red Velvet Cookie",
      price: "PHP 129.00",
      desc: "Soft and velvety cookie with a hint of cocoa and cream cheese flavor.",
      category: "Cookies"
    },
    {
      img: cookies5,
      name: "Cookies and Cream Cookie",
      price: "PHP 149.00",
      desc: "Buttery cookie blended with crushed chocolate cookies and white chocolate chunks.",
      category: "Cookies"
    },
    {
      img: cookies6,
      name: "Chocnut Cookie",
      price: "PHP 135.00",
      desc: "Filipino-inspired cookie with nostalgic Chocnut flavor and a soft bite.",
      category: "Cookies"
    },
  ];

  const croissants = [
    {
      img: croissant1,
      name: "Cheddar Onion Croissant",
      price: "PHP 89.00",
      desc: "Flaky, buttery croissant layered with savory cheddar cheese and caramelized onions for a rich taste.",
      category: "Croissants"
    },
    {
      img: croissant2,
      name: "Banana Chocolate Croissant",
      price: "PHP 99.00",
      desc: "Golden croissant filled with sweet banana slices and rich chocolate for a perfect morning indulgence.",
      category: "Croissants"
    },
    {
      img: croissant3,
      name: "Ube Almond Croissant",
      price: "PHP 109.00",
      desc: "A flaky croissant filled with creamy ube and topped with almond paste and slices for nutty sweetness.",
      category: "Croissants"
    },
    {
      img: croissant4,
      name: "Butter Croissant",
      price: "PHP 129.00",
      desc: "Light, airy, and perfectly layered croissant made with rich butter that melts with every flaky bite.",
      category: "Croissants"
    },
    {
      img: croissant5,
      name: "Pistachio Croissant",
      price: "PHP 119.00",
      desc: "Flaky croissant generously filled with pistachio cream and topped with crushed nuts for extra crunch.",
      category: "Croissants"
    },
    {
      img: croissant6,
      name: "Coffee Croissant",
      price: "PHP 135.00",
      desc: "A buttery croissant infused with bold coffee flavor, pairing perfectly with its soft, flaky layers.",
      category: "Croissants"
    },
  ];

  const brownies = [
    {
      img: brownies1,
      name: "Classic Brownie",
      price: "PHP 79.00",
      desc: "Our timeless classic — a rich and fudgy chocolate brownie with a chewy bite that melts in your mouth.",
      category: "Brownies"
    },
    {
      img: brownies2,
      name: "Tiramisu Brownie",
      price: "PHP 89.00",
      desc: "Layers of coffee-infused brownie and mascarpone cream create a decadent twist on the Italian favorite.",
      category: "Brownies"
    },
    {
      img: brownies3,
      name: "S'mores Brownie",
      price: "PHP 95.00",
      desc: "A fudgy brownie topped with toasted marshmallows and crunchy graham crackers for a campfire treat.",
      category: "Brownies"
    },
  ];

  const tiramisu = [
    {
      img: tiramisu1,
      name: "Classic Tiramisu",
      price: "PHP 199.00",
      desc: "Layers of espresso-soaked ladyfingers with creamy mascarpone and cocoa topping.",
      category: "Tiramisu"
    },
    {
      img: tiramisu2,
      name: "Matcha Tiramisu",
      price: "PHP 209.00",
      desc: "Light and fluffy tiramisu made with matcha powder for a unique earthy sweetness.",
      category: "Tiramisu"
    },
  ];

  const waffles = [
    {
      img: waffle1,
      name: "Classic Stroopwafel",
      price: "PHP 149.00",
      desc: "Thin caramel-filled waffle cookies with a chewy center and crisp golden edges.",
      category: "Waffles"
    },
    {
      img: waffle2,
      name: "Almond Chocolate Stroopwafel",
      price: "PHP 159.00",
      desc: "Crunchy waffle layered with gooey caramel and topped with almonds and chocolate.",
      category: "Waffles"
    },
  ];

  const allPastries = [...cookies, ...croissants, ...brownies, ...tiramisu, ...waffles];

  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");

  const filteredPastries = allPastries.filter((item) => {
    const matchesCategory = filterCategory === "All" || item.category === filterCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
            <div className="pastry-item" key={index}>
              <img src={item.img} alt={item.name} />
              <div className="pastry-info">
                <h2>{item.name}</h2>
                <p className="price">{item.price}</p>
              </div>
              <p className='pastry-desc'>{item.desc}</p>
              {/* <button className="add-cart"><FaCartPlus /> Add to Cart</button> */}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Pastries;
