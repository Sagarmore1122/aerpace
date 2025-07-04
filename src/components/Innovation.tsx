
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Shield, Cpu, Satellite } from 'lucide-react';



const Innovation = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [animationProgress, setAnimationProgress] = useState(0);

  const stats = [
    { number: "500+", label: "Successful Missions", icon: "🚀" },
    { number: "99.9%", label: "Reliability Rate", icon: "⚡" },
    { number: "24/7", label: "Technical Support", icon: "🛡️" },
    { number: "50+", label: "Countries Served", icon: "🌍" }
  ];

  const innovations = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Advanced AI Integration",
      description: "Machine learning algorithms for autonomous navigation and real-time decision-making in complex environments.",
      details: "Our proprietary AI system processes over 1TB of sensor data per second, enabling unprecedented autonomous capabilities.",
      color: "from-cyan-400 to-blue-400"
    },
    {
      icon: <Satellite className="w-8 h-8" />,
      title: "Quantum Communication",
      description: "Secure, instantaneous data transmission across vast distances with quantum-encrypted channels.",
      details: "Military-grade quantum encryption ensures complete communication security even in hostile environments.",
      color: "from-blue-400 to-purple-400"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Sustainable Power",
      description: "Revolutionary energy systems combining solar, fuel cells, and advanced battery technology.",
      details: "Extended operation capabilities with 300% longer flight times compared to traditional systems.",
      color: "from-green-400 to-cyan-400"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Adaptive Defense",
      description: "Multi-layered security systems with real-time threat assessment and countermeasures.",
      details: "Advanced stealth technology and electronic warfare capabilities for mission-critical operations.",
      color: "from-red-400 to-pink-400"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationProgress(prev => (prev + 1) % 100);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="innovation" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Animated grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            animation: 'grid-move 20s linear infinite'
          }}></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Innovation Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full border border-cyan-400/20 text-cyan-400 text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></div>
              Innovation Lab
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Innovation at
              <span className="block text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">
                Every Level
              </span>
            </h2>

            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              Our commitment to pushing boundaries drives us to develop groundbreaking
              technologies that redefine what's possible in aerospace engineering.
            </p>

            <div className="space-y-6">
              {innovations.map((innovation, index) => (
                <div
                  key={index}
                  className={`flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 cursor-pointer ${activeFeature === index
                    ? 'bg-slate-800/50 border border-cyan-400/30 backdrop-blur-sm'
                    : 'hover:bg-slate-800/30'
                    }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${innovation.color} text-white flex-shrink-0`}>
                    {innovation.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold mb-2 flex items-center">
                      {innovation.title}
                      {activeFeature === index && (
                        <ArrowRight className="ml-2 w-4 h-4 text-cyan-400" />
                      )}
                    </h3>
                    <p className="text-white/60 mb-2">{innovation.description}</p>
                    {activeFeature === index && (
                      <p className="text-cyan-400 text-sm animate-fade-in">{innovation.details}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex space-x-4 mt-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Explore Technology
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 px-6 py-3 rounded-full transition-all duration-300"
              >
                Research Papers
              </Button>
            </div>
          </div>

          {/* Interactive 3D-like visualization */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 p-8 flex items-center justify-center relative overflow-hidden">
              {/* Animated center piece */}
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center relative">
                  <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
                  </div>

                  {/* Orbiting elements */}
                  {[0, 60, 120, 180, 240, 300].map((rotation, index) => (
                    <div
                      key={index}
                      className="absolute w-3 h-3 bg-cyan-400 rounded-full animate-spin"
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: `translate(-50%, -50%) rotate(${rotation + animationProgress * 3.6}deg) translateY(-50px)`,
                        animationDuration: '10s',
                        animationDelay: `${index * 0.5}s`
                      }}
                    ></div>
                  ))}
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">Next-Gen Technology</h3>
                  <p className="text-white/60">Powered by quantum processors</p>
                  <div className="mt-4 flex justify-center space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Background pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="w-full h-full bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text mb-2">
                {stat.number}
              </div>
              <div className="text-white/70 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Partnership & Collaboration */}
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700 p-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Leading Global Partnerships</h3>
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            Collaborating with industry leaders, research institutions, and government agencies
            to accelerate innovation and deliver cutting-edge solutions.
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default Innovation;
