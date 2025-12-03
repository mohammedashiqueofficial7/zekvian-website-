import React from 'react';
import { Zap, Shield, BarChart3, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast Performance',
      description: 'Experience blazing-fast response times with our optimized infrastructure and intelligent caching systems.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security with end-to-end encryption, SOC 2 compliance, and advanced threat protection.'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Gain deep insights with real-time dashboards, custom reports, and predictive analytics capabilities.'
    },
    {
      icon: Users,
      title: 'Seamless Collaboration',
      description: 'Enable team productivity with real-time collaboration tools, role-based access, and workflow automation.'
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 via-accent-50 to-rose-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">Zekvian</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features designed to accelerate your business growth and streamline operations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gradient-to-br from-white to-orange-50 rounded-lg hover:shadow-lg transition-shadow duration-300 group border border-orange-200"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-600 transition-colors duration-300">
                <feature.icon size={32} className="text-primary-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;