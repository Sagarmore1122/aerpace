
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Eye, Download, Share2 } from 'lucide-react';

const ProductShowcase = () => {
  const [activeProduct, setActiveProduct] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const products = [
    {
      id: 1,
      name: "Phantom Series",
      category: "Stealth Technology",
      description: "Advanced stealth technology with precision navigation for defense and security applications",
      image: "/lovable-uploads/24b46212-6cf0-4235-b173-7beee417d857.png",
      features: ["Stealth Mode", "4K Recording", "30min Flight", "AI Navigation"],
      specs: {
        range: "15km",
        payload: "2.5kg",
        speed: "120km/h"
      },
      targetAudience: "Defense & Security",
      price: "Contact for Quote"
    },
    {
      id: 2,
      name: "Vision Pro",
      category: "Professional Grade",
      description: "Professional-grade aerial photography and surveillance with advanced AI capabilities",
      image: "/lovable-uploads/24b46212-6cf0-4235-b173-7beee417d857.png",
      features: ["8K Recording", "AI Tracking", "60min Flight", "Thermal Vision"],
      specs: {
        range: "25km",
        payload: "5kg",
        speed: "150km/h"
      },
      targetAudience: "Media & Commercial",
      price: "From $15,000"
    },
    {
      id: 3,
      name: "Swift Elite",
      category: "High Performance",
      description: "High-speed reconnaissance with cutting-edge sensors and quantum communication",
      image: "/lovable-uploads/24b46212-6cf0-4235-b173-7beee417d857.png",
      features: ["Speed Mode", "Quantum Comm", "45min Flight", "Multi-Sensor"],
      specs: {
        range: "50km",
        payload: "3kg",
        speed: "200km/h"
      },
      targetAudience: "Research & Development",
      price: "From $25,000"
    }
  ];

  return (
    <section id="products" className="py-20 bg-slate-800 relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-slate-900/50 backdrop-blur-sm rounded-full border border-cyan-400/20 text-cyan-400 text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></div>
            Product Portfolio
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Revolutionary
            <span className="block text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">
              Product Line
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Each drone is meticulously crafted with precision engineering and innovative technology 
            to deliver unparalleled performance across diverse industries and applications.
          </p>
        </div>

        {/* Product Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-4 bg-slate-900/50 backdrop-blur-sm rounded-full p-2 border border-slate-700">
            {products.map((product, index) => (
              <button
                key={product.id}
                onClick={() => setActiveProduct(index)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeProduct === index
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                    : 'text-white/60 hover:text-white hover:bg-white/10'
                }`}
              >
                {product.category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.id}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`bg-slate-900/50 border-slate-700 transition-all duration-500 transform cursor-pointer backdrop-blur-sm ${
                hoveredCard === index 
                  ? 'border-cyan-400/50 scale-105 shadow-2xl shadow-cyan-500/20' 
                  : 'hover:border-cyan-400/30 hover:scale-102'
              } ${
                activeProduct === index ? 'ring-2 ring-cyan-400/50' : ''
              }`}
            >
              <CardContent className="p-6">
                <div className="aspect-video bg-slate-800 rounded-lg mb-6 overflow-hidden relative group">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  
                  {/* Hover overlay with actions */}
                  <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center space-x-4 transition-opacity duration-300 ${
                    hoveredCard === index ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <Button size="sm" variant="outline" className="text-black border-white/30 hover:bg-white/10">
                      <Eye className="w-4 h-4 mr-2" />
                      View
                    </Button>
                    <Button size="sm" variant="outline" className="text-black border-white/30 hover:bg-white/10">
                      <Download className="w-4 h-4 mr-2" />
                      Specs
                    </Button>
                    <Button size="sm" variant="outline" className="text-black border-white/30 hover:bg-white/10">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-cyan-400 font-medium bg-cyan-400/10 px-2 py-1 rounded-full">
                    {product.targetAudience}
                  </span>
                  <span className="text-sm text-white/60">{product.price}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {product.name}
                </h3>
                
                <p className="text-white/70 mb-6 leading-relaxed">
                  {product.description}
                </p>
                
                {/* Specifications */}
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-slate-800/50 rounded-lg">
                  <div className="text-center">
                    <div className="text-cyan-400 font-bold">{product.specs.range}</div>
                    <div className="text-xs text-white/60">Range</div>
                  </div>
                  <div className="text-center border-x border-slate-700">
                    <div className="text-cyan-400 font-bold">{product.specs.payload}</div>
                    <div className="text-xs text-white/60">Payload</div>
                  </div>
                  <div className="text-center">
                    <div className="text-cyan-400 font-bold">{product.specs.speed}</div>
                    <div className="text-xs text-white/60">Max Speed</div>
                  </div>
                </div>
                
                {/* Features */}
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-cyan-400">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 group">
                    Learn More
                    <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  <button className="px-4 py-3 border border-cyan-400/30 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-all duration-300">
                    Quote
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call-to-Action for different personas */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-cyan-400/30 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-3">For Investors</h3>
            <p className="text-white/70 mb-4">Explore our market leadership and growth potential in the aerospace sector.</p>
            <Button variant="outline" className="text-cyan-400 border-cyan-400/30 hover:bg-cyan-400/10">
              View Investor Deck
            </Button>
          </div>
          
          <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-cyan-400/30 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-3">For Media</h3>
            <p className="text-white/70 mb-4">Access high-resolution images, press releases, and brand assets.</p>
            <Button variant="outline" className="text-cyan-400 border-cyan-400/30 hover:bg-cyan-400/10">
              Media Kit
            </Button>
          </div>
          
          <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-cyan-400/30 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-3">Join Our Team</h3>
            <p className="text-white/70 mb-4">Be part of the future of aerospace technology and innovation.</p>
            <Button variant="outline" className="text-cyan-400 border-cyan-400/30 hover:bg-cyan-400/10">
              View Careers
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
