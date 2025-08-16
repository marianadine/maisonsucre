import React, { useEffect, useState, useRef } from 'react';
import '../styles/CommonStyles.css';
import ScrollIndicator from './ScrollIndicator';

const Home = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = [useRef(), useRef(), useRef()];

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
      <ScrollIndicator sections={3} activeSection={activeSection} />

      <section className='container' ref={sectionRefs[0]} data-index={0}>
        <h1>hi</h1>
      </section>

      <section className='container' ref={sectionRefs[1]} data-index={1}>
        <h1>hi</h1>
      </section>

      <section className='container' ref={sectionRefs[2]} data-index={2}>
        <h1>hi</h1>
      </section>
    </div>
  )
}

export default Home
