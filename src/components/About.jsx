import React from 'react'
import honeycomb from '../imgs/honeycomb.jpg'
import '../styles/About.css'

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
    </div>
  )
}

export default About
