import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import honeycomb from '../imgs/honeycomb.jpg'
import mockupborder from '../imgs/mockupborder.png'

import honeycombcroissant from '../imgs/honeycombcroissant.mp4'

import packaging from '../imgs/packaging.png'
import store from '../imgs/store.png'
import tag from '../imgs/tag.png'

import i1 from '../imgs/i1.jpg'
import i2 from '../imgs/i2.jpg'
import i3 from '../imgs/i3.jpg'
import i4 from '../imgs/i4.jpg'
import i5 from '../imgs/i5.jpg'

import layers from '../imgs/layers.png'

import '../styles/About.css'
import { ChevronLeft, ChevronRight } from "lucide-react";

const About = () => {
  const images = [i1, i2, i5, i4, i3];
  const [index, setIndex] = useState(0);

  return (
    <div>
      <section
        className="about-container w-full min-h-screen"
        style={{
          backgroundImage: `url(${mockupborder})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className='row-container aboutpage'>
          <video
            className="honeycomb"
            src={honeycombcroissant}
            autoPlay
            loop
            muted
            playsInline
          >
            Your browser does not support the video tag.
          </video>
          <div className='text-container aboutpage'>
            <h1 className="mainpagetext about font-libre-caslon font-bold text-white text-[96px] -mb-[15px]">
              Maison Sucré
            </h1>
            <p className="poppins-text abouttag font-poppins text-2xl w-full font-light italic text-white mb-4">
              / meh-ZON soo-CRAY /
            </p>

            <p className="poppins-text about subtitle font-poppins text-2xl w-full text-white mb-4">
              — Sweet House or House of Sweets
            </p>

            <p className="poppins-text about font-poppins text-2xl w-[80%] text-white mb-4">
              — A refined place where artisanal pastries and desserts are crafted with elegance and care.
            </p>

            <img className='tag' src={tag} alt="Maison Sucré Tag" />
          </div>
        </div>
      </section>

      <section className="w-full min-h-screen flex flex-col items-center justify-center p-8">
        <h1 className="poppins-header abouts2 font-poppins font-bold text-[48px] text-[#1F4397] w-full text-center">
          Whispers of Butter & Sugar
        </h1>

        <div className="carousel">
          {/* Left Arrow */}
          <button
            onClick={() => setIndex((prev) => (prev - 1 + images.length) % images.length)}
            className="carousel-arrow left-arrow"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="carousel-track">
            {images.map((img, i) => {
              const offset = (i - index + images.length) % images.length;
              const isMobile = window.innerWidth <= 768;

              let xOffset = 0;
              if (offset === 1) xOffset = isMobile ? 60 : 300;    // right next
              if (offset === 2) xOffset = isMobile ? 120 : 500;    // far right
              if (offset === 4) xOffset = isMobile ? -60 : -300;  // left next
              if (offset === 3) xOffset = isMobile ? -120 : -500;  // far left

              const isCenter = offset === 0;
              const isNear = offset === 1 || offset === 4; // next to center
              const isFar = offset === 2 || offset === 3;  // far left/right

              let zIndex = 0;
              if (isCenter) zIndex = 5;
              else if (isNear) zIndex = 3;
              else zIndex = 1;

              let scale = 0.9;
              if (isCenter) scale = 1.1;
              if (isFar) scale = 0.7;

              return (
                <motion.img
                  key={i}
                  src={img}
                  alt="Maison Sucré"
                  className="carousel-item"
                  initial={false}
                  animate={{
                    x: xOffset,
                    scale: scale,
                    opacity: 1,
                    filter: isCenter ? "blur(0px)" : "blur(2px)",
                    zIndex: zIndex,
                  }}
                  transition={{ duration: 0.3 }}
                />
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => setIndex((prev) => (prev + 1) % images.length)}
            className="carousel-arrow right-arrow"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <p className='poppins-text abouts2'>Every pastry begins as a delicate balance of the simplest treasures — golden butter, pure sugar, and the softest flour. At Maison Sucré, we let these honest ingredients speak for themselves, creating flavors that linger like a sweet memory.</p>
      </section>

      <img className='store' src={store} alt="Maison Sucré" />
      <img className='mockupborder' src={mockupborder} alt="Maison Sucré" />

      <section className='packaging-section'>
        <div className='row-container abouts3'>
          <img className='mockup' src={packaging} alt="Maison Sucré" />
          <div style={{ width: '100%' }} className='text-container abouts3'>
            <h1 style={{ textAlign: 'left' }} className="poppins-header abouts3 font-poppins font-bold text-4xl text-[#1F4397] w-full text-left leading-snug">
              Wrapped in elegance, sealed with care.
            </h1>


            <p style={{ textAlign: 'justify' }} className='poppins-text abouts3'>At Maison Sucré, we handle our pastries with the same care we put into baking them. Every creation is placed in thoughtfully designed packaging that preserves freshness, protects delicate layers, and reflects our signature elegance. From the buttery flake of a croissant to the silky cream of a tiramisu, each piece is wrapped like a gift — because every bite should feel special before you even taste it.</p>
          </div>
        </div>
      </section>

      <section className='layers-section'>
        <img className='layers' src={layers} alt="Maison Sucré Layers" />
        <div className="text-overlay">
          <h1 className='poppins-header abouts2'>Layers of goodness.</h1>
          <p className='poppins-text abouts2'>
            From the delicate flake of a croissant to the rich cream of a tiramisu,
            every pastry at Maison Sucré is built in layers — of flavor, texture, and care.
            Each bite unfolds like a story, crafted to delight from start to finish.
          </p>
        </div>
      </section>

    </div>
  )
}

export default About
