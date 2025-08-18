import React from 'react'
import honeycomb from '../imgs/honeycomb.jpg'
import mockupborder from '../imgs/mockupborder.png'

import packaging from '../imgs/packaging.png'
import store from '../imgs/store.png'

import '../styles/About.css'
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const About = () => {
  return (
    <div>
      <section className="container">
        <div className='row-container aboutpage'>
          <img className='honeycomb' src={honeycomb} alt="Maison Sucré" />
          <div className='text-container'>
            <h1 className='mainpagetext' style={{ fontWeight: '600' }}>Maison Sucré</h1>
            <p className='poppins-text' style={{ fontWeight: '600', fontStyle: 'italic' }}>/ meh-ZON soo-CRAY /</p>
            <p className='poppins-text'>— Sweet House or House of Sweets</p>
            <p className='poppins-text'>— A refined place where artisanal pastries and desserts are crafted with elegance and care. </p>
          </div>
        </div>
      </section>

      <section className='container'>
        <h1 className='poppins-header abouts2'>Whispers of Butter & Sugar</h1>

        <img className='ingredients' src={honeycomb} alt="Maison Sucré" />

        <p className='poppins-text abouts2'>Every pastry begins as a delicate balance of the simplest treasures — golden butter, pure sugar, and the softest flour. At Maison Sucré, we let these honest ingredients speak for themselves, creating flavors that linger like a sweet memory.</p>
      </section>

      <img className='store' src={store} alt="Maison Sucré" />
      <img className='mockupborder' src={mockupborder} alt="Maison Sucré" />

      <section style={{ marginBottom: '-600px' }} className='container'>
        <div className='row-container'>
          <img className='mockup' src={packaging} alt="Maison Sucré" />
          <div style={{ width: '60%' }} className='text-container'>
            <h1 style={{ textAlign: 'left', marginBottom: '-10px' }} className='poppins-header abouts2'>Wrapped in elegance, sealed with care.</h1>

            <p style={{ textAlign: 'justify' }} className='poppins-text abouts2'>At Maison Sucré, we handle our pastries with the same care we put into baking them. Every creation is placed in thoughtfully designed packaging that preserves freshness, protects delicate layers, and reflects our signature elegance. From the buttery flake of a croissant to the silky cream of a tiramisu, each piece is wrapped like a gift — because every bite should feel special before you even taste it.</p>
          </div>
        </div>
      </section>

      <section className='container'>
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

export default About
