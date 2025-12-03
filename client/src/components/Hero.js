import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = ({ scrollToSection }) => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          <div className="text-left animate-fade-in">
            <div className="inline-flex items-center bg-primary-100 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></span>
              <span className="text-primary-700 text-sm font-medium">Next-Gen Automation Platform</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Your Business with
              <span className="bg-gradient-to-r from-primary-600 via-accent-500 to-rose-500 bg-clip-text text-transparent block mt-2">ZEKVIAN</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Revolutionize your business operations with AI-powered automation. <span className="text-primary-600 font-semibold bg-primary-100 px-2 py-1 rounded">Zekvian</span> delivers enterprise-grade solutions that scale with your ambitions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white font-bold py-4 px-8 rounded-xl shadow-2xl hover:shadow-primary-500/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-3 group"
              >
                <span>Start Free Trial</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center gap-3"
              >
                <Play size={20} />
                <span>Watch Demo</span>
              </button>
            </div>
            
            <div className="flex items-center space-x-8 text-gray-600">
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">10K+</p>
                <p className="text-sm">Active Users</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">99.9%</p>
                <p className="text-sm">Uptime</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">500+</p>
                <p className="text-sm">Integrations</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-2xl">
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl h-80 md:h-96 flex items-center justify-center relative overflow-hidden">
                <div className="text-center relative z-10">
                  <div className="w-24 h-24 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl animate-pulse">
                    <Play size={32} className="text-white ml-1" />
                  </div>
                  <p className="text-gray-900 font-bold text-xl mb-2">Interactive <span className="text-primary-600">Zekvian</span> Experience</p>
                  <p className="text-gray-600 text-sm">See automation in action</p>
                </div>
                <div className="absolute top-4 right-4 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-primary-500 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;