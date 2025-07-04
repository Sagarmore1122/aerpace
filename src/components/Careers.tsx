
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Briefcase, TrendingUp, Award } from 'lucide-react';

const Careers = () => {
  const opportunities = [
    {
      title: "Aerospace Engineer",
      department: "Engineering",
      location: "Silicon Valley, CA",
      type: "Full-time",
      description: "Design and develop next-generation drone systems with cutting-edge technology."
    },
    {
      title: "AI Research Scientist",
      department: "Research & Development",
      location: "Remote/Hybrid",
      type: "Full-time",
      description: "Lead AI research initiatives for autonomous navigation and machine learning systems."
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Silicon Valley, CA",
      type: "Full-time",
      description: "Drive product strategy and roadmap for revolutionary aerospace solutions."
    }
  ];

  const benefits = [
    { icon: <Users className="w-6 h-6" />, title: "Collaborative Culture", description: "Work with world-class engineers and researchers" },
    { icon: <TrendingUp className="w-6 h-6" />, title: "Career Growth", description: "Accelerate your career in cutting-edge technology" },
    { icon: <Award className="w-6 h-6" />, title: "Innovation Focus", description: "Lead breakthrough projects that shape the future" },
    { icon: <Briefcase className="w-6 h-6" />, title: "Competitive Package", description: "Equity, benefits, and flexible work arrangements" }
  ];

  return (
    <section id="careers" className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full border border-purple-400/20 text-purple-400 text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></div>
            Join Our Mission
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Shape the Future of
            <span className="block text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text">
              Aerospace Technology
            </span>
          </h2>
          
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
            Join a team of visionaries, engineers, and innovators who are redefining what's possible 
            in aerospace technology. Build your career while building the future.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-purple-400/30 transition-all duration-300 text-center group"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="text-white">
                  {benefit.icon}
                </div>
              </div>
              <h3 className="text-white font-semibold mb-2">{benefit.title}</h3>
              <p className="text-white/60 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Open Positions */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Open Positions</h3>
          <div className="grid gap-6 max-w-4xl mx-auto">
            {opportunities.map((job, index) => (
              <div 
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-purple-400/30 transition-all duration-300 group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                      {job.title}
                    </h4>
                    <div className="flex items-center space-x-4 text-white/60 text-sm mt-2">
                      <span>{job.department}</span>
                      <span>•</span>
                      <span>{job.location}</span>
                      <span>•</span>
                      <span className="px-2 py-1 bg-purple-400/20 text-purple-400 rounded-full text-xs">
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <Button 
                    size="sm"
                    className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    Apply
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
                <p className="text-white/70">{job.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700 p-8">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Launch Your Career?</h3>
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            Don't see the perfect role? We're always looking for exceptional talent. 
            Send us your resume and let's explore opportunities together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              View All Positions
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-purple-400/30 text-purple-400 hover:bg-purple-400/10 px-8 py-3 rounded-full transition-all duration-300"
            >
              Submit Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
