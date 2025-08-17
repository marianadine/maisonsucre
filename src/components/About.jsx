import React from 'react'
import honeycomb from '../imgs/honeycomb.jpg'
import '../styles/About.css'
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const About = () => {
  return (
    <div>
      <section className="container">
        <div className='row-container'>
          <div className='text-container'>
            <h1 className='mainpagetext' style={{ fontWeight: '600' }}>Maison Sucré</h1>
            <p className='poppins-text' style={{ fontWeight: '600', fontStyle: 'italic' }}>/ meh-ZON soo-CRAY /</p>
            <p className='poppins-text'>— Sweet House or House of Sweets</p>
            <p className='poppins-text'>— A refined place where artisanal pastries and desserts are crafted with elegance and care. </p>
          </div>
          <img className='honeycomb' src={honeycomb} alt="Maison Sucré" />
        </div>
      </section>

      <section className='container'>
        <h1 className='poppins-header abouts2'>Whispers of Butter & Sugar</h1>

        <img className='honeycomb' src={honeycomb} alt="Maison Sucré" />

        <p className='poppins-text abouts2'>Every pastry begins as a delicate balance of the simplest treasures — golden butter, pure sugar, and the softest flour. At Maison Sucré, we let these honest ingredients speak for themselves, creating fla vors that linger like a sweet memory.</p>
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
