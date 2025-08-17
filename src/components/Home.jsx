import React, { useEffect, useState, useRef } from 'react';
import '../styles/CommonStyles.css';
import '../styles/Home.css';
import ScrollIndicator from './ScrollIndicator';

import mslogo from '../imgs/mslogo.png';

import home1 from '../imgs/home1.png';
import home2 from '../imgs/home2.png';
import home3 from '../imgs/home3.png';
import home4 from '../imgs/home4.png';

import sementbg from '../imgs/sementbg.png';
import brownies from '../imgs/brownies.png';
import croissant from '../imgs/croissant.png';
import tiramisu from '../imgs/tiramisu.png';
import waffles from '../imgs/waffles.png';
import cookies from '../imgs/cookies.png';

import bs1 from '../imgs/bs1.png';
import bs2 from '../imgs/bs2.png';
import bs3 from '../imgs/bs3.png';
import bs4 from '../imgs/bs4.png';

import cs from '../imgs/cs.png';

import bgvideo from '../imgs/bgvideo.mp4';

import { FaPlus, FaMinus, FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

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

  const [quantities, setQuantities] = useState(
    pastries.reduce((acc, item) => {
      acc[item.id] = 1; // default quantity 1
      return acc;
    }, {})
  );

  const handleIncrement = (id) => {
    setQuantities(prev => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const handleDecrement = (id) => {
    setQuantities(prev => ({ ...prev, [id]: prev[id] > 1 ? prev[id] - 1 : 1 }));
  };

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

      <section className="container" ref={sectionRefs[0]} data-index={0}>
        <img src={home4} alt="Top pastry" className="edge-img top" />
        <img src={home1} alt="Left pastry" className="edge-img left" />
        <img src={home3} alt="Bottom pastry" className="edge-img bottom" />
        <img src={home2} alt="Right pastry" className="edge-img right" />

        <div className="center-text">
          <img src={mslogo} alt="Maison Sucré Logo" className="mainlogo" />
          <h1 className="mainpagetext">Maison Sucré</h1>
          <p>A home for refined sweetness.</p>
        </div>
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
                  <button className="icon-btn" onClick={() => handleDecrement(item.id)}><FaMinus /></button>
                  <span className='qty-counter'>{quantities[item.id]}</span>
                  <button className="icon-btn" onClick={() => handleIncrement(item.id)}><FaPlus /></button>
                  <button className="preorder-btn">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        className="container"
        style={{ backgroundImage: `url(${sementbg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        ref={sectionRefs[2]}
        data-index={2}
      >
        <h1 style={{ margin: 0, fontSize: '24px', textAlign: 'center' }} className="poppins-header">MAISON SUCRÉ STUDIO</h1>
        <p className="pastry-text">
          Explore our pastries and desserts and discover a world where elegance meets indulgence.
        </p>
        <div className="pastry-container">
          <img className="pastry" src={croissant} />
          <img className="pastry" src={waffles} />
          <img className="pastry" src={tiramisu} />
          <img className="pastry" src={brownies} />
          <img className="pastry" src={cookies} />
        </div>
      </section>

      <section className='container' ref={sectionRefs[3]} data-index={3}>
        <div className="crack-row">
          <img className="crack-cake" src={cs} alt="Crack Cake" />

          <div className="crack-text-wrapper">
            <h1 className="poppins-header">Did you hear that crack?</h1>
            <h1 className="poppins-h3" style={{ borderTop: '2px dotted #1F4397', paddingTop: '25px' }}>The pastry with a perfect shatter.</h1>
            <p className="poppins-text" style={{ marginTop: '-5px', fontSize: '22px' }}>
              Get ready for pastries with a shatter so satisfying, you’ll taste it before the first bite.
              Golden, flaky, and irresistibly addictive — Crack Cakes are almost here.
            </p>
          </div>
        </div>
      </section>

      <section className='container' ref={sectionRefs[4]} data-index={4}>
        <video className="bg-video" autoPlay loop muted playsInline>
          <source src={bgvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

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

export default Home
