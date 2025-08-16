import React, { useEffect, useState, useRef } from 'react';
import '../styles/CommonStyles.css';
import '../styles/Home.css';
import ScrollIndicator from './ScrollIndicator';

const Home = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = [useRef(), useRef(), useRef(), useRef(), useRef()];

  useEffect(() => {
    const observerOptions = { root: null, threshold: 0.5 };
    const observerCallback = entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.dataset.index);
          setActiveSection(index);
        }
      });
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionRefs.forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
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
        <h1>pastries</h1>
      </section>

      <section className='container' ref={sectionRefs[3]} data-index={3}>
        <h1>coming soon</h1>
      </section>

      <section className='container' ref={sectionRefs[4]} data-index={4}>
        <h1>contact</h1>
      </section>
    </div>
  )
}

export default Home
