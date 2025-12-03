import React from 'react';
import { Mail, Linkedin, Download } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Alex Thompson',
      title: 'CEO & Founder',
      bio: 'Former VP of Engineering at major tech companies. 15+ years building scalable platforms.',
      email: 'alex@zekvian.com',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Sarah Kim',
      title: 'CTO',
      bio: 'Ex-Google engineer with expertise in distributed systems and machine learning.',
      email: 'sarah@zekvian.com',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'David Rodriguez',
      title: 'VP of Product',
      bio: 'Product leader with 12+ years experience building enterprise software solutions.',
      email: 'david@zekvian.com',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Lisa Chen',
      title: 'Head of Design',
      bio: 'Award-winning designer focused on creating intuitive user experiences.',
      email: 'lisa@zekvian.com',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Michael Johnson',
      title: 'VP of Sales',
      bio: 'Sales leader with 10+ years driving revenue growth for enterprise software companies.',
      email: 'michael@zekvian.com',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face'
    }
  ];

  const advisors = [
    { name: 'Dr. James Wilson', title: 'Former CTO, Enterprise Corp' },
    { name: 'Maria Garcia', title: 'Ex-VP Product, TechGiant' },
    { name: 'Robert Lee', title: 'Serial Entrepreneur & Investor' }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50 py-20">
      <div className="container-max">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent mb-6">
            About Zekvian
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We're on a mission to democratize enterprise-grade automation and help businesses of all sizes achieve operational excellence through innovative technology solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <div className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-xl border border-white/50">
            <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded in 2020, Zekvian emerged from the frustration of seeing businesses struggle with outdated, complex systems. 
              We believe that powerful automation should be accessible, intuitive, and transformative for organizations of every size.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, we serve over 10,000 companies worldwide, from startups to Fortune 500 enterprises, helping them streamline 
              operations, reduce costs, and accelerate growth through intelligent automation.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-primary-500 to-accent-500 p-10 rounded-3xl shadow-xl text-white">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <h3 className="text-3xl font-bold mb-6">Our Story</h3>
            <p className="mb-6 leading-relaxed opacity-90">
              What started as a small team of engineers solving their own workflow problems has grown into a comprehensive platform 
              trusted by industry leaders. We've raised $50M in funding and continue to innovate at the intersection of AI, 
              automation, and enterprise software.
            </p>
            <p className="leading-relaxed opacity-90">
              Our commitment to security, scalability, and user experience drives everything we do, ensuring our customers can 
              focus on what matters most - growing their business.
            </p>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-4xl font-bold text-gray-900 text-center mb-16">Meet Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.slice(0, 5).map((member, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{index + 1}</span>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h4>
                <p className="text-primary-600 font-semibold mb-4">{member.title}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">{member.bio}</p>
                <div className="flex justify-center space-x-4">
                  <a
                    href={`mailto:${member.email}`}
                    className="w-10 h-10 bg-gray-100 hover:bg-primary-500 rounded-full flex items-center justify-center transition-all duration-300 group"
                  >
                    <Mail size={18} className="text-gray-600 group-hover:text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-100 hover:bg-accent-500 rounded-full flex items-center justify-center transition-all duration-300 group"
                  >
                    <Linkedin size={18} className="text-gray-600 group-hover:text-white" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-xl border border-white/50">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Advisors</h3>
            <div className="space-y-6">
              {advisors.map((advisor, index) => (
                <div key={index} className="flex items-center space-x-6 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {advisor.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">{advisor.name}</p>
                    <p className="text-gray-600">{advisor.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-10 rounded-3xl shadow-xl text-white">
            <h3 className="text-3xl font-bold mb-8">Media & Press Kit</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Download our comprehensive media kit including logos, product screenshots, and company information for press coverage.
            </p>
            <div className="space-y-4">
              <button className="w-full flex items-center justify-between p-4 bg-white/10 hover:bg-white/20 rounded-2xl transition-all duration-300 group">
                <div className="flex items-center space-x-3">
                  <Download size={20} className="text-primary-400" />
                  <span className="font-semibold">Company Logos</span>
                </div>
                <span className="text-sm text-gray-400 group-hover:text-white">ZIP</span>
              </button>
              <button className="w-full flex items-center justify-between p-4 bg-white/10 hover:bg-white/20 rounded-2xl transition-all duration-300 group">
                <div className="flex items-center space-x-3">
                  <Download size={20} className="text-accent-400" />
                  <span className="font-semibold">Product Screenshots</span>
                </div>
                <span className="text-sm text-gray-400 group-hover:text-white">ZIP</span>
              </button>
              <button className="w-full flex items-center justify-between p-4 bg-white/10 hover:bg-white/20 rounded-2xl transition-all duration-300 group">
                <div className="flex items-center space-x-3">
                  <Download size={20} className="text-primary-400" />
                  <span className="font-semibold">Company Fact Sheet</span>
                </div>
                <span className="text-sm text-gray-400 group-hover:text-white">PDF</span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 mt-20">
          <div className="bg-gradient-to-br from-primary-600 to-accent-600 p-10 rounded-3xl shadow-2xl text-white">
            <h3 className="text-3xl font-bold mb-6">The <span className="text-yellow-200">Zekvian</span> Platform</h3>
            <p className="text-white/90 mb-6 leading-relaxed">
              <span className="text-yellow-200 font-semibold">Zekvian</span> is more than just automation software - it's a comprehensive ecosystem designed to transform how businesses operate. Our platform combines AI-powered workflows, intelligent data processing, and seamless integrations to create a unified automation experience.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                <span>AI-Powered Workflow Engine</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                <span>Real-time Analytics Dashboard</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                <span>Enterprise-grade Security</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                <span>500+ Pre-built Integrations</span>
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm p-10 rounded-3xl shadow-xl border border-primary-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Why Choose <span className="text-primary-600">Zekvian</span>?</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Unlike traditional automation tools, <span className="text-primary-600 font-semibold">Zekvian</span> was built from the ground up for the modern enterprise. We understand that every business is unique, which is why our platform adapts to your specific needs rather than forcing you to change your processes.
            </p>
            <div className="space-y-4">
              <div className="p-4 bg-primary-50 rounded-xl border-l-4 border-primary-500">
                <h4 className="font-semibold text-gray-900 mb-2">No-Code Automation</h4>
                <p className="text-gray-600 text-sm">Build complex workflows without writing a single line of code</p>
              </div>
              <div className="p-4 bg-accent-50 rounded-xl border-l-4 border-accent-500">
                <h4 className="font-semibold text-gray-900 mb-2">Scalable Architecture</h4>
                <p className="text-gray-600 text-sm">Grows with your business from startup to enterprise</p>
              </div>
              <div className="p-4 bg-rose-50 rounded-xl border-l-4 border-rose-500">
                <h4 className="font-semibold text-gray-900 mb-2">24/7 Support</h4>
                <p className="text-gray-600 text-sm">Expert support team available around the clock</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-12 rounded-3xl shadow-2xl text-white mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-6">The <span className="text-primary-400">Zekvian</span> Difference</h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how <span className="text-primary-400 font-semibold">Zekvian</span> compares to traditional automation solutions and why industry leaders choose us for their digital transformation journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">10x</span>
              </div>
              <h4 className="text-xl font-bold mb-3">Faster Implementation</h4>
              <p className="text-gray-300">Deploy automation workflows in days, not months, with <span className="text-primary-400">Zekvian's</span> intuitive platform</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-accent-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">50%</span>
              </div>
              <h4 className="text-xl font-bold mb-3">Cost Reduction</h4>
              <p className="text-gray-300">Average cost savings achieved by companies switching to <span className="text-primary-400">Zekvian</span> from legacy systems</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-rose-500 to-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">99%</span>
              </div>
              <h4 className="text-xl font-bold mb-3">Customer Satisfaction</h4>
              <p className="text-gray-300">Customer satisfaction rate based on our latest survey of <span className="text-primary-400">Zekvian</span> users worldwide</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary-500 to-accent-500 p-12 rounded-3xl shadow-2xl text-white text-center">
          <h3 className="text-3xl font-bold mb-6">Join the <span className="text-yellow-200">Zekvian</span> Revolution</h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-white/90">
            Ready to transform your business with intelligent automation? Join thousands of companies already using <span className="text-yellow-200 font-semibold">Zekvian</span> to streamline their operations and accelerate growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 font-bold py-3 px-8 rounded-xl hover:bg-gray-100 transition-colors">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white font-bold py-3 px-8 rounded-xl hover:bg-white hover:text-primary-600 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;