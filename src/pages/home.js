import React, { Component, useRef, useEffect, useState } from 'react';

function FadeInSection(props) {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
      });
      observer.observe(domRef.current);
    }, []);
    
    return (
      <div
        className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}
      >
        {props.children}
      </div>
    );
  }

function Home() {
 
    return (
        <div className="home">
            <FadeInSection key={'introduction'}>
                <div className="box">
                    <span>Introduction</span>
                </div>
            </FadeInSection>
            <FadeInSection key={'vision'}>
                <div className="box">
                    <span>Visions</span>
                </div>
            </FadeInSection>
            <FadeInSection key={'mission'}>
                <div className="box">
                    <span>Missions</span>
                </div>
            </FadeInSection>
            <FadeInSection key={'product'}>
                <div className="box">
                    <span>Products</span>
                </div>
            </FadeInSection>
        </div>

    );
}


export default Home;