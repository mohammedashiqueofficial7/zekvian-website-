import React from 'react';
import { Zap, Shield, BarChart3, Users, Star, CheckCircle } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast Performance',
      description: 'Experience blazing-fast response times with our optimized infrastructure and intelligent caching systems.',
      stats: '99.9% Uptime'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security with end-to-end encryption, SOC 2 compliance, and advanced threat protection.',
      stats: 'SOC 2 Certified'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Gain deep insights with real-time dashboards, custom reports, and predictive analytics capabilities.',
      stats: '500+ Metrics'
    },
    {
      icon: Users,
      title: 'Seamless Collaboration',
      description: 'Enable team productivity with real-time collaboration tools, role-based access, and workflow automation.',
      stats: '10K+ Teams'
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-amber-500/5"></div>
      <div className="container-max relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border border-yellow-500/30 px-6 py-3 rounded-full mb-6">
            <Star className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-yellow-400 font-semibold">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Why Choose <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent">ZEKVIAN</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Powerful features designed to accelerate your business growth and streamline operations with enterprise-grade reliability.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative p-8 bg-gradient-to-br from-gray-800/80 to-black/80 backdrop-blur-sm rounded-2xl border border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-500 group hover:shadow-2xl hover:shadow-yellow-500/20 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-amber-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <feature.icon size={28} className="text-black" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                        {feature.title}
                      </h3>
                      <span className="bg-gradient-to-r from-yellow-500 to-amber-600 text-black px-3 py-1 rounded-full text-sm font-semibold">
                        {feature.stats}
                      </span>
                    </div>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      {feature.description}
                    </p>
                    <div className="flex items-center text-yellow-400">
                      <CheckCircle size={16} className="mr-2" />
                      <span className="text-sm font-medium">Enterprise Ready</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* <div className="text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-amber-600 text-black px-8 py-4 rounded-2xl shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 transform hover:-translate-y-1">
            <span className="font-bold text-lg mr-3">Ready to get started?</span>
            <span className="bg-black/20 px-4 py-2 rounded-xl font-semibold">Join 10K+ Companies</span>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Features;