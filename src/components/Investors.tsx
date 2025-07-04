
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, DollarSign, Users, Globe } from 'lucide-react';

const Investors = () => {
  const metrics = [
    { icon: <TrendingUp className="w-8 h-8" />, value: "$2.5B", label: "Market Valuation", growth: "+45% YoY" },
    { icon: <DollarSign className="w-8 h-8" />, value: "$150M", label: "Revenue Run Rate", growth: "+120% YoY" },
    { icon: <Users className="w-8 h-8" />, value: "500+", label: "Global Customers", growth: "+80% YoY" },
    { icon: <Globe className="w-8 h-8" />, value: "50+", label: "Countries Served", growth: "+25% YoY" }
  ];

  const milestones = [
    { year: "2024", achievement: "Series C Funding - $200M", description: "Led by top-tier VCs with strategic partnerships" },
    { year: "2023", achievement: "Market Expansion", description: "Entered 20+ new international markets" },
    { year: "2022", achievement: "Product Launch", description: "Revolutionary Phantom Series deployment" },
    { year: "2021", achievement: "Series B - $75M", description: "Accelerated R&D and talent acquisition" }
  ];

  return (
    <section id="investors" className="py-20 bg-slate-800 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-80 h-80 bg-green-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-slate-900/50 backdrop-blur-sm rounded-full border border-green-400/20 text-green-400 text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
            Investor Relations
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Powering the Future of
            <span className="block text-transparent bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text">
              Aerospace Innovation
            </span>
          </h2>
          
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Join leading investors in backing the next generation of aerospace technology. 
            Discover our growth trajectory, market opportunity, and vision for the future.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-green-400/30 transition-all duration-300 text-center group hover:scale-105 transform"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="text-white">
                  {metric.icon}
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
              <div className="text-white/70 font-medium mb-2">{metric.label}</div>
              <div className="text-green-400 text-sm font-semibold">{metric.growth}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Growth Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Growth Milestones</h3>
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {milestone.year}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold mb-2 group-hover:text-green-400 transition-colors">
                      {milestone.achievement}
                    </h4>
                    <p className="text-white/60">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Market Opportunity */}
          <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-6">Market Opportunity</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white/70">Total Addressable Market</span>
                  <span className="text-green-400 font-bold">$127B</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full w-3/4"></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white/70">Serviceable Market</span>
                  <span className="text-green-400 font-bold">$45B</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full w-1/2"></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white/70">Current Market Share</span>
                  <span className="text-green-400 font-bold">2.3%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full w-1/4"></div>
                </div>
              </div>
            </div>
            
            <p className="text-white/60 mt-6 text-sm">
              The global drone market is projected to grow at 25% CAGR through 2030, 
              driven by increasing demand for autonomous systems across defense, commercial, and civilian sectors.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700 p-8">
          <h3 className="text-3xl font-bold text-white mb-4">Partner with Tomorrow's Leaders</h3>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Access our comprehensive investor materials, financial reports, and strategic roadmap. 
            Join us in revolutionizing the aerospace industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Download Investor Deck
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-green-400/30 text-green-400 hover:bg-green-400/10 px-8 py-3 rounded-full transition-all duration-300"
            >
              Schedule Meeting
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-green-400/30 text-green-400 hover:bg-green-400/10 px-8 py-3 rounded-full transition-all duration-300"
            >
              Financial Reports
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investors;
