
import React from 'react';
import Hero from '../components/Hero';
import ProductShowcase from '../components/ProductShowcase';
import Innovation from '../components/Innovation';
import Careers from '../components/Careers';
import Investors from '../components/Investors';
import Media from '../components/Media';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Hero />
      <ProductShowcase />
      <Innovation />
      <Careers />
      <Investors />
      <Media />
      <Footer />
    </div>
  );
};

export default Index;
