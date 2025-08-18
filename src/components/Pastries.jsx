import React from 'react'
import '../styles/Pastries.css'
import '../styles/CommonStyles.css'
import { FaCartPlus } from "react-icons/fa";

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
    { img: cookies1, name: "Chocolate Chip Cookie", price: "PHP 129.50", desc: "Classic chocolate chip cookie with a soft and chewy texture." },
    { img: cookies2, name: "Double Chocolate Cookie", price: "PHP 139.50", desc: "Rich chocolate cookie with extra chocolate chunks." },
    { img: cookies3, name: "Oatmeal Raisin Cookie", price: "PHP 119.50", desc: "Chewy oatmeal cookie with sweet raisins." },
    { img: cookies4, name: "Peanut Butter Cookie", price: "PHP 129.00", desc: "Nutty and soft cookie with peanut butter flavor." },
    { img: cookies5, name: "White Chocolate Macadamia", price: "PHP 149.00", desc: "Buttery cookie with white chocolate and macadamia nuts." },
    { img: cookies6, name: "Red Velvet Cookie", price: "PHP 135.00", desc: "Soft red velvet cookie with cream cheese flavor." },
  ];

  const croissants = [
    { img: croissant1, name: "Butter Croissant", price: "PHP 89.00", desc: "Flaky, buttery, and golden brown croissant." },
    { img: croissant2, name: "Chocolate Croissant", price: "PHP 99.00", desc: "Buttery croissant filled with rich chocolate." },
    { img: croissant3, name: "Almond Croissant", price: "PHP 109.00", desc: "Flaky croissant with almond paste and sliced almonds." },
    { img: croissant4, name: "Ham & Cheese Croissant", price: "PHP 129.00", desc: "Savory croissant stuffed with ham and cheese." },
    { img: croissant5, name: "Strawberry Croissant", price: "PHP 119.00", desc: "Sweet croissant with strawberry filling." },
    { img: croissant6, name: "Matcha Croissant", price: "PHP 135.00", desc: "Unique croissant infused with matcha flavor." },
  ];

  const brownies = [
    { img: brownies1, name: "Classic Brownie", price: "PHP 79.00", desc: "Rich, fudgy chocolate brownie." },
    { img: brownies2, name: "Walnut Brownie", price: "PHP 89.00", desc: "Fudgy brownie with crunchy walnuts." },
    { img: brownies3, name: "Cheesecake Brownie", price: "PHP 95.00", desc: "Brownie swirled with cheesecake filling." },
  ];

  const tiramisu = [
    { img: tiramisu1, name: "Classic Tiramisu", price: "PHP 199.00", desc: "Coffee-soaked layers with mascarpone cream." },
    { img: tiramisu2, name: "Strawberry Tiramisu", price: "PHP 209.00", desc: "Fruity twist on the classic tiramisu." },
  ];

  const waffles = [
    { img: waffle1, name: "Classic Belgian Waffle", price: "PHP 149.00", desc: "Crispy outside, fluffy inside Belgian waffle." },
    { img: waffle2, name: "Chocolate Waffle", price: "PHP 159.00", desc: "Waffle topped with chocolate drizzle." },
  ];

  const renderSection = (title, items) => (
    <section className="container pastries">
      <h1 className="poppins-text" style={{ marginLeft: '350px', fontSize: '48px', fontWeight: '200' }}>{title}</h1>
      <div className="pastry-grid">
        {items.map((item, index) => (
          <div className="pastry-item" key={index}>
            <img src={item.img} alt={item.name} />
            <div className="pastry-info">
              <h2>{item.name}</h2>
              <p className="price">{item.price}</p>
            </div>
            <p className='pastry-desc'>{item.desc}</p>
            {/* <button className="add-cart"><FaCartPlus /></button> */}
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <div>
      {renderSection("Cookies", cookies)}
      {renderSection("Croissants", croissants)}
      {renderSection("Brownies", brownies)}
      {renderSection("Tiramisu", tiramisu)}
      {renderSection("Waffles", waffles)}
    </div>
  )
}

export default Pastries
