
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Phone, MapPin, Linkedin, Twitter, Youtube, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Newsletter Section */}
      <div className="border-b border-slate-800 py-16 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Ahead of the Future
            </h2>
            <p className="text-xl text-white/70 mb-8">
              Get exclusive insights into aerospace innovation, product launches, and industry trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors"
              />
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 group">
                Subscribe
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
            <p className="text-sm text-white/50 mt-4">
              Join 10,000+ aerospace professionals and enthusiasts
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="text-3xl font-bold text-white mb-4">
                <span className="text-cyan-400">AER</span>PACE
              </div>
              <p className="text-white/60 mb-6 max-w-md leading-relaxed">
                Pioneering the future of aerospace technology with innovative drone solutions 
                that push the boundaries of what's possible in aerial intelligence and autonomous systems.
              </p>
              
              {/* Contact Information */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-white/60 hover:text-cyan-400 transition-colors">
                  <Mail className="w-4 h-4 mr-3" />
                  <span>contact@aerpace.com</span>
                </div>
                <div className="flex items-center text-white/60 hover:text-cyan-400 transition-colors">
                  <Phone className="w-4 h-4 mr-3" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-white/60 hover:text-cyan-400 transition-colors">
                  <MapPin className="w-4 h-4 mr-3" />
                  <span>Silicon Valley, CA</span>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 group">
                  <Linkedin className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 group">
                  <Twitter className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 group">
                  <Youtube className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 group">
                  <Github className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
            
            {/* Products */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-lg">Products</h3>
              <ul className="space-y-3 text-white/60">
                <li><a href="#" className="hover:text-cyan-400 transition-colors flex items-center group">
                  Phantom Series
                  <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors flex items-center group">
                  Vision Pro
                  <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors flex items-center group">
                  Swift Elite
                  <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors flex items-center group">
                  Custom Solutions
                  <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </a></li>
              </ul>
            </div>
            
            {/* Company */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-lg">Company</h3>
              <ul className="space-y-3 text-white/60">
                <li><a href="#" className="hover:text-cyan-400 transition-colors flex items-center group">
                  About Us
                  <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </a></li>
                <li><a href="#careers" className="hover:text-cyan-400 transition-colors flex items-center group">
                  Careers
                  <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors flex items-center group">
                  Leadership
                  <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors flex items-center group">
                  News & Press
                  <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </a></li>
              </ul>
            </div>
            
            {/* Resources */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-lg">Resources</h3>
              <ul className="space-y-3 text-white/60">
                <li><a href="#investors" className="hover:text-cyan-400 transition-colors flex items-center group">
                  Investor Relations
                  <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors flex items-center group">
                  Technical Docs
                  <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors flex items-center group">
                  Support Center
                  <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </a></li>
                <li><a href="#media" className="hover:text-cyan-400 transition-colors flex items-center group">
                  Media Kit
                  <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Section */}
      <div className="border-t border-slate-800 py-8 relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mb-4 md:mb-0">
              <p className="text-white/40 text-sm">
                © 2024 Aerpace Technologies, Inc. All rights reserved.
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm">System Status: Operational</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm text-white/40">
              <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Cookie Policy</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Security</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
