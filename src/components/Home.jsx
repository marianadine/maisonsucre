import React, { useEffect, useState, useRef } from 'react';
import '../styles/CommonStyles.css';
import '../styles/Home.css';
import ScrollIndicator from './ScrollIndicator';
import brownies from '../imgs/brownies.png';
import croissant from '../imgs/croissant.png';
import tiramisu from '../imgs/tiramisu.png';
import waffles from '../imgs/waffles.png';
import cookies from '../imgs/cookies.png';

const Home = () => {
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
          <p style={{ textAlign: 'right' }}>From flaky layers to decadent bites, these are the pastries that have captured hearts and tas te buds alike.</p>
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
        <p>Explore our pastries and desserts and discover a world where elegance meets indulgence.</p>
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
