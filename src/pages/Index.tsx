
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Testimonial from '../components/Testimonial';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Reset scroll position when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-agilis-light">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonial />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
