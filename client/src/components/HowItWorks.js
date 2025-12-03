import React from 'react';
import { UserPlus, Settings, Rocket, TrendingUp } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: 'Sign Up & Onboard',
      description: 'Create your account and get onboarded with our guided setup process in under 5 minutes.'
    },
    {
      icon: Settings,
      title: 'Configure & Customize',
      description: 'Tailor the platform to your needs with our intuitive configuration tools and templates.'
    },
    {
      icon: Rocket,
      title: 'Deploy & Launch',
      description: 'Go live instantly with our one-click deployment and seamless integration capabilities.'
    },
    {
      icon: TrendingUp,
      title: 'Scale & Optimize',
      description: 'Monitor performance, analyze data, and scale your operations with intelligent insights.'
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-primary-100 via-primary-50 to-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started in minutes with our streamlined process designed for rapid deployment and immediate value.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-primary-600 to-primary-500 rounded-full flex items-center justify-center mx-auto mb-4 relative shadow-lg">
                  <step.icon size={32} className="text-white" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-primary-600 font-bold text-sm border-2 border-primary-600">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full">
                  <div className="w-full h-0.5 bg-primary-200 relative">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-primary-600 rounded-full"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;