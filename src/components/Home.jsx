import React, { useEffect, useState, useRef } from 'react';
import '../styles/CommonStyles.css';
import '../styles/Home.css';
import ScrollIndicator from './ScrollIndicator';
import brownies from '../imgs/brownies.png';
import croissant from '../imgs/croissant.png';
import tiramisu from '../imgs/tiramisu.png';
import waffles from '../imgs/waffles.png';
import cookies from '../imgs/cookies.png';

import bs1 from '../imgs/bs1.png';
import bs2 from '../imgs/bs2.png';
import bs3 from '../imgs/bs3.png';
import bs4 from '../imgs/bs4.png';

import { FaPlus, FaMinus } from "react-icons/fa";

const Home = () => {
  const pastries = [
    {
      id: 1,
      img: bs1,
      title: "Egg Tart Croissant",
      desc: "Buttery, flaky croissant layers filled with smooth, velvety egg custard — a golden twist on a classic favorite."
    },
    {
      id: 2,
      img: bs2,
      title: "Tiramisu Brownie",
      desc: "Rich, fudgy brownie topped with creamy mascarpone and a hint of espresso — the perfect coffee-kissed indulgence."
    },
    {
      id: 3,
      img: bs3,
      title: "Honeycomb Croissant",
      desc: "Crisp, airy pastry with a caramelized honeycomb center — sweet, crunchy, and irresistibly buttery."
    },
    {
      id: 4,
      img: bs4,
      title: "Classic Tiramisu",
      desc: "Layers of espresso-soaked ladyfingers and mascarpone cream, topped with cocoa — a timeless Italian classic."
    }
  ];

  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = [useRef(), useRef(), useRef(), useRef(), useRef()];

  useEffect(() => {
    // Section observer (already working)
    const sectionOptions = { root: null, threshold: 0.5 };
    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.dataset.index);
          setActiveSection(index);
        }
      });
    }, sectionOptions);

    sectionRefs.forEach(ref => {
      if (ref.current) sectionObserver.observe(ref.current);
    });

    // pastry animation observer
    const pastryOptions = { root: null, threshold: 0.2 };
    const pastryObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          pastryObserver.unobserve(entry.target);
        }
      });
    }, pastryOptions);

    const pastries = document.querySelectorAll(".pastry");
    pastries.forEach(pastry => pastryObserver.observe(pastry));

    return () => {
      sectionObserver.disconnect();
      pastryObserver.disconnect();
    };
  }, []);

  return (
    <div className="scroll-container">
      <ScrollIndicator sections={5} activeSection={activeSection} />

      <section className='container' ref={sectionRefs[0]} data-index={0}>
        <h1 className='mainpagetext'>Maison Sucré</h1>
        <p>A home for refined sweetness.</p>
      </section>

      <section className='container' ref={sectionRefs[1]} data-index={1}>
        <div className='row-container sweet-spotlights'>
          <h3 className='poppins-header'>Sweet Spotlights</h3>
          <p className='poppins-text' style={{ textAlign: 'right' }}>From flaky layers to decadent bites, these are the pastries that have captured hearts and taste buds alike.</p>
        </div>

        <div className="menu-grid">
          {pastries.map((item) => (
            <div key={item.id} className="menu-card">
              <img className="menu-img" src={item.img} alt={item.title} />

              <div className="menu-info">
                <h4 className='menu-title'>{item.title}</h4>
                <p className="menu-desc">{item.desc}</p>

                <div className="menu-actions">
                  <button className="icon-btn"><FaMinus /></button>
                  <span className='qty-counter'>1</span>
                  <button className="icon-btn"><FaPlus /></button>
                  <button className="preorder-btn">Pre-order</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className='container' ref={sectionRefs[2]} data-index={2}>
        <div>
          <img className='pastry' src={cookies} />
          <img className='pastry' src={brownies} />
          <img className='pastry' src={waffles} />
          <img className='pastry' src={croissant} />
          <img className='pastry' src={tiramisu} />
        </div>
        <p className='pastry-text'>Explore our pastries and desserts and discover a world where elegance meets indulgence.</p>
      </section>

      <section className='container' ref={sectionRefs[3]} data-index={3}>
        <h1 className='poppins-header'>Did you hear that crack?</h1>
        <h1 className='poppins-header'>The pastry with a perfect shatter.</h1>
        <p>Get ready for pastries with a shatter so satisfying, you’ll taste it before the first bite. Golden, flaky, and irresistibly addictive — Crack Cakes are almost here.</p>
      </section>

      <section className='container' ref={sectionRefs[4]} data-index={4}>
        <h1>contact</h1>
      </section>
    </div>
  )
}

export default Home
