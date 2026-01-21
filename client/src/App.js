import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import SocialProof from './components/SocialProof';
import About from './components/About';
import Contact from './components/Contact';
import Legal from './components/Legal';
import Security from './components/Security';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import AdminApp from './components/AdminApp';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const MainWebsite = () => (
    <div className="min-h-screen bg-white text-gray-800">
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      
      <main>
        <section id="home">
          <Hero scrollToSection={scrollToSection} />
          <Features />
          <HowItWorks />
          <SocialProof />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
        
        <section id="legal">
          <Legal />
        </section>
        
        <section id="security">
          <Security />
        </section>
        
        <section id="faq">
          <FAQ />
        </section>
      </main>
      
      <Footer scrollToSection={scrollToSection} />
      <Chatbot />
    </div>
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainWebsite />} />
        <Route path="/admin" element={<AdminApp />} />
      </Routes>
    </Router>
  );
}

export default App;