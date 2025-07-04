
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Camera, FileText, Video, Image } from 'lucide-react';

const Media = () => {
  const pressReleases = [
    {
      date: "Dec 15, 2024",
      title: "Aerpace Announces Revolutionary Quantum Communication System",
      excerpt: "Breakthrough technology enables secure, instantaneous data transmission across vast distances...",
      category: "Product Launch"
    },
    {
      date: "Nov 28, 2024",
      title: "Series C Funding: $200M to Accelerate Global Expansion",
      excerpt: "Led by prominent venture capital firms to fuel international growth and R&D initiatives...",
      category: "Funding"
    },
    {
      date: "Oct 22, 2024",
      title: "Partnership with Global Defense Consortium",
      excerpt: "Strategic alliance to develop next-generation autonomous defense systems...",
      category: "Partnership"
    }
  ];

  const mediaAssets = [
    { icon: <Image className="w-6 h-6" />, title: "High-Resolution Images", count: "50+ Assets", description: "Product photos, team portraits, facility images" },
    { icon: <Video className="w-6 h-6" />, title: "Video Content", count: "15+ Videos", description: "Product demos, company overview, CEO interviews" },
    { icon: <FileText className="w-6 h-6" />, title: "Brand Guidelines", count: "Complete Kit", description: "Logos, color palettes, typography guidelines" },
    { icon: <Camera className="w-6 h-6" />, title: "Executive Photos", count: "20+ Portraits", description: "Professional headshots of leadership team" }
  ];

  const awards = [
    { year: "2024", award: "Innovation Excellence Award", organization: "Aerospace Technology Council" },
    { year: "2023", award: "Best Emerging Technology", organization: "TechCrunch Disrupt" },
    { year: "2023", award: "Defense Innovation Award", organization: "National Defense Association" },
    { year: "2022", award: "Startup of the Year", organization: "Silicon Valley Innovation Awards" }
  ];

  return (
    <section id="media" className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full border border-orange-400/20 text-orange-400 text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-orange-400 rounded-full mr-2 animate-pulse"></div>
            Media Center
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Press & Media
            <span className="block text-transparent bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text">
              Resources
            </span>
          </h2>
          
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Access the latest news, press releases, media assets, and brand resources. 
            Everything you need to tell the Aerpace story accurately and compellingly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Press Releases */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-8">Latest Press Releases</h3>
            <div className="space-y-6">
              {pressReleases.map((release, index) => (
                <div 
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-orange-400/30 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-white/60 text-sm">{release.date}</span>
                        <span className="px-2 py-1 bg-orange-400/20 text-orange-400 rounded-full text-xs">
                          {release.category}
                        </span>
                      </div>
                      <h4 className="text-xl font-semibold text-white group-hover:text-orange-400 transition-colors mb-3">
                        {release.title}
                      </h4>
                      <p className="text-white/70 mb-4">{release.excerpt}</p>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <Button 
                      size="sm"
                      className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white"
                    >
                      Read Full Release
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    <Button 
                      size="sm"
                      variant="outline"
                      className="border-orange-400/30 text-orange-400 hover:bg-orange-400/10"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      PDF
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Awards & Recognition */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Awards & Recognition</h3>
            <div className="space-y-4">
              {awards.map((award, index) => (
                <div 
                  key={index}
                  className="bg-slate-800/30 backdrop-blur-sm p-4 rounded-xl border border-slate-700 hover:border-orange-400/30 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {award.year}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold text-sm">{award.award}</h4>
                      <p className="text-white/60 text-xs">{award.organization}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Media Assets */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Media Kit & Assets</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mediaAssets.map((asset, index) => (
              <div 
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-orange-400/30 transition-all duration-300 text-center group hover:scale-105 transform"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {asset.icon}
                  </div>
                </div>
                <h4 className="text-white font-semibold mb-2">{asset.title}</h4>
                <div className="text-orange-400 text-sm font-semibold mb-2">{asset.count}</div>
                <p className="text-white/60 text-sm mb-4">{asset.description}</p>
                <Button 
                  size="sm"
                  variant="outline"
                  className="border-orange-400/30 text-orange-400 hover:bg-orange-400/10 w-full"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700 p-8">
          <h3 className="text-2xl font-bold text-white mb-4">Media Inquiries</h3>
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            Need additional information, interview opportunities, or custom assets? 
            Our media relations team is here to help tell your story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Contact Media Team
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-orange-400/30 text-orange-400 hover:bg-orange-400/10 px-8 py-3 rounded-full transition-all duration-300"
            >
              Schedule Interview
            </Button>
          </div>
          
          <div className="mt-6 pt-6 border-t border-slate-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-white/60">
              <div>
                <span className="font-semibold text-white">Media Contact:</span><br />
                Sarah Chen, VP Communications<br />
                <a href="mailto:media@aerpace.com" className="text-orange-400 hover:text-orange-300 transition-colors">
                  media@aerpace.com
                </a>
              </div>
              <div>
                <span className="font-semibold text-white">Phone:</span><br />
                +1 (555) 123-PRESS<br />
                Available 9 AM - 6 PM PST
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Media;
