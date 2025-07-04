
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, ChevronDown, Menu, X } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const navItems = [
    { href: "#products", label: "Products", description: "Explore our drone solutions" },
    { href: "#innovation", label: "Innovation", description: "Our cutting-edge technology" },
    { href: "#careers", label: "Careers", description: "Join our mission" },
    { href: "#investors", label: "Investors", description: "Growth opportunities" },
    { href: "#media", label: "Media", description: "Press & resources" }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      {/* Interactive background elements */}
      <div className="absolute inset-0">
        <div
          className="absolute w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse transition-transform duration-1000 ease-out"
          style={{
            left: `${20 + (mousePosition.x * 0.02)}px`,
            top: `${80 + (mousePosition.y * 0.01)}px`,
          }}
          aria-hidden="true"
        ></div>
        <div
          className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000 transition-transform duration-1000 ease-out"
          style={{
            right: `${80 - (mousePosition.x * 0.015)}px`,
            bottom: `${80 - (mousePosition.y * 0.02)}px`,
          }}
          aria-hidden="true"
        ></div>

        {/* Floating particles */}
        <div className="absolute inset-0" aria-hidden="true">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Enhanced Navigation with Accessibility */}
      <nav className="relative z-10 flex justify-between items-center p-6 lg:p-8" role="navigation" aria-label="Main navigation">
        <div className="text-2xl font-bold text-white group cursor-pointer">
          <span className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">AER</span>
          <span className="group-hover:text-cyan-100 transition-colors duration-300">PACE</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 text-white/80">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-cyan-400 transition-all duration-300 hover:scale-105 relative group focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded px-2 py-1"
              aria-label={item.description}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-sm border-t border-slate-700 md:hidden">
            <div className="flex flex-col space-y-2 p-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-white/80 hover:text-cyan-400 transition-colors py-3 px-4 rounded-lg hover:bg-slate-800/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-slate-800/50"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label={item.description}
                >
                  <div className="font-medium">{item.label}</div>
                  <div className="text-sm text-white/60">{item.description}</div>
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Enhanced Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] text-center px-6">
        <div className="mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <div className="inline-flex items-center px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full border border-cyan-400/20 text-cyan-400 text-sm font-medium mb-8">
            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse" aria-hidden="true"></div>
            Leading the Future of Aerospace Technology
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight opacity-0 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          The Future of
          <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
            Aerospace Vision
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-white/70 mb-8 max-w-3xl leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          Revolutionary drone technology that transforms possibilities into reality.
          Experience the next generation of aerial innovation powered by AI and quantum computing.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 group focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            asChild
          >
            <a href="#products" aria-label="Explore our drone products and solutions">
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
            </a>
          </Button>

          <Button
        variant="outline"
        size="lg"
        onClick={() => setIsVideoModalOpen(true)}
        className="text-black border-2 border-gray-300/30 hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 backdrop-blur-sm group focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
        aria-label="Watch product demonstration video"
      >
        <Play
          className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:scale-110"
          aria-hidden="true"
        />
        Watch Demo
      </Button>

      {isVideoModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="relative w-full max-w-3xl aspect-video rounded-xl overflow-hidden bg-black">
            <video
              className="w-full h-full"
              controls
              autoPlay
              onEnded={() => setIsVideoModalOpen(false)}
            >
              <source src="public\videos\ecosystem_hero.mp4" type="video/mp4" />
              
            </video>

            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-2 right-2 bg-white/20 hover:bg-white/30 p-2 rounded-full"
              aria-label="Close video"
            >
              <X className="text-white" />
            </button>
             </div>
        </div> )}

        </div>

        {/* Key metrics for investors */}
        <div className="grid grid-cols-3 gap-8 mt-12 opacity-0 animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-1">$2.5B</div>
            <div className="text-white/60 text-sm">Market Valuation</div>
          </div>
          <div className="text-center border-x border-white/20 px-8">
            <div className="text-3xl font-bold text-cyan-400 mb-1">150+</div>
            <div className="text-white/60 text-sm">Patents Filed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-1">500+</div>
            <div className="text-white/60 text-sm">Global Partners</div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50 animate-bounce" aria-hidden="true">
        <div className="flex flex-col items-center">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center mb-2">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
          <ChevronDown className="w-4 h-4 animate-pulse" />
        </div>
      </div>

      {/* Video Modal with improved accessibility */}
      {isVideoModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="video-modal-title"
        >
          <div className="relative bg-slate-900 rounded-2xl p-6 max-w-4xl w-full">
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded p-2"
              aria-label="Close video modal"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="aspect-video bg-slate-800 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <h2 id="video-modal-title" className="sr-only">Product Demonstration Video</h2>
                <Play className="w-16 h-16 text-cyan-400 mx-auto mb-4" aria-hidden="true" />
                <p className="text-white">Demo video would be embedded here</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
