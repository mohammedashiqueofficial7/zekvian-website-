import React from 'react';
import { Mail, Linkedin, Download } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Loki',
      // title: 'CEO & Founder',
      // bio: 'Former VP of Engineering at major tech companies. 15+ years building scalable platforms.',
      // email: 'loki@zekvian.com',
      image: 'https://th.bing.com/th/id/R.568c1498bc8acfd6b17eb9baeb04aba5?rik=VS4wq8ALwHWuyw&riu=http%3a%2f%2fimages5.fanpop.com%2fimage%2fphotos%2f30700000%2fLoki-the-avengers-30730363-1280-1024.jpg&ehk=6bop0cwBKk91nRngq8%2fgzNizIRTIVWH4xAftaER5xDg%3d&risl=&pid=ImgRaw&r=0'
    },
    {
      name: 'Batman',
      // title: 'CTO',
      // bio: 'Ex-Google engineer with expertise in distributed systems and machine learning.',
      // email: 'batman@zekvian.com',
      image: 'https://images.unsplash.com/photo-1588862081167-d5b98006637e?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      name: 'Iron Man',
      // title: 'VP of Product',
      // bio: 'Product leader with 12+ years experience building enterprise software solutions.',
      // email: 'ironman@zekvian.com',
      image: 'https://images.unsplash.com/photo-1623984109622-f9c970ba32fc?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      name: 'Superman',
      // title: 'Head of Design',
      // bio: 'Award-winning designer focused on creating intuitive user experiences.',
      // email: 'superman@zekvian.com',
      image: 'https://images.unsplash.com/photo-1702138129392-364adea0ad00?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      name: 'Spider-Man',
      // title: 'VP of Sales',
      // bio: 'Sales leader with 10+ years driving revenue growth for enterprise software companies.',
      // email: 'spiderman@zekvian.com',
      image: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=400&fit=crop&crop=face'
    }
  ];

  const advisors = [
    { name: 'Dr. James Wilson', title: 'Former CTO, Enterprise Corp' },
    { name: 'Maria Garcia', title: 'Ex-VP Product, TechGiant' },
    { name: 'Robert Lee', title: 'Serial Entrepreneur & Investor' }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-20">
      <div className="container-max">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent mb-6">
            About Zekvian
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We're on a mission to democratize enterprise-grade automation and help businesses of all sizes achieve operational excellence through innovative technology solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <div className="bg-gradient-to-br from-gray-800/80 to-black/80 border border-yellow-500/30 p-10 rounded-3xl shadow-xl">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-black font-bold text-xl">M</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Founded in 2020, Zekvian emerged from the frustration of seeing businesses struggle with outdated, complex systems. 
              We believe that powerful automation should be accessible, intuitive, and transformative for organizations of every size.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Today, we serve over 10,000 companies worldwide, from startups to Fortune 500 enterprises, helping them streamline 
              operations, reduce costs, and accelerate growth through intelligent automation.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-yellow-500 to-amber-600 p-10 rounded-3xl shadow-xl text-black">
            <div className="w-16 h-16 bg-black/20 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-black font-bold text-xl">S</span>
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
          <h3 className="text-4xl font-bold text-white text-center mb-16">Meet Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.slice(0, 5).map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/80 to-black/80 border border-yellow-500/30 rounded-3xl p-8 text-center shadow-xl hover:shadow-yellow-500/20 transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-yellow-500 shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full flex items-center justify-center">
                    <span className="text-black text-xs font-bold">{index + 1}</span>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{member.name}</h4>
                <p className="text-yellow-400 font-semibold mb-4">{member.title}</p>
                <p className="text-gray-300 mb-6 leading-relaxed">{member.bio}</p>
                <div className="flex justify-center space-x-4">
                  <a
                    href={`mailto:${member.email}`}
                    className="w-10 h-10 bg-gray-700 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-all duration-300 group"
                  >
                    <Mail size={18} className="text-gray-300 group-hover:text-black" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-700 hover:bg-amber-500 rounded-full flex items-center justify-center transition-all duration-300 group"
                  >
                    <Linkedin size={18} className="text-gray-300 group-hover:text-black" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-gray-800/80 to-black/80 border border-yellow-500/30 p-10 rounded-3xl shadow-xl">
            <h3 className="text-3xl font-bold text-white mb-8">Advisors</h3>
            <div className="space-y-6">
              {advisors.map((advisor, index) => (
                <div key={index} className="flex items-center space-x-6 p-4 bg-gradient-to-r from-gray-900/80 to-black/80 border border-yellow-500/20 rounded-2xl hover:border-yellow-400/40 transition-all duration-300 hover:shadow-md hover:shadow-yellow-500/10">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full flex items-center justify-center">
                    <span className="text-black font-bold text-lg">
                      {advisor.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-white text-lg">{advisor.name}</p>
                    <p className="text-gray-300">{advisor.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800/80 to-black/80 border border-yellow-500/30 p-10 rounded-3xl shadow-xl text-white">
            <h3 className="text-3xl font-bold mb-8">Media & <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">Press Kit</span></h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Download our comprehensive media kit including logos, product screenshots, and company information for press coverage.
            </p>
            <div className="space-y-4">
              <button className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-gray-900/80 to-black/80 border border-yellow-500/20 hover:border-yellow-400/40 rounded-2xl transition-all duration-300 group hover:shadow-md hover:shadow-yellow-500/10">
                <div className="flex items-center space-x-3">
                  <Download size={20} className="text-yellow-400" />
                  <span className="font-semibold">Company Logos</span>
                </div>
                <span className="text-sm text-gray-400 group-hover:text-yellow-400">ZIP</span>
              </button>
              <button className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-gray-900/80 to-black/80 border border-yellow-500/20 hover:border-yellow-400/40 rounded-2xl transition-all duration-300 group hover:shadow-md hover:shadow-yellow-500/10">
                <div className="flex items-center space-x-3">
                  <Download size={20} className="text-amber-500" />
                  <span className="font-semibold">Product Screenshots</span>
                </div>
                <span className="text-sm text-gray-400 group-hover:text-amber-400">ZIP</span>
              </button>
              <button className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-gray-900/80 to-black/80 border border-yellow-500/20 hover:border-yellow-400/40 rounded-2xl transition-all duration-300 group hover:shadow-md hover:shadow-yellow-500/10">
                <div className="flex items-center space-x-3">
                  <Download size={20} className="text-yellow-400" />
                  <span className="font-semibold">Company Fact Sheet</span>
                </div>
                <span className="text-sm text-gray-400 group-hover:text-yellow-400">PDF</span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 mt-20">
          <div className="bg-gradient-to-br from-yellow-500 to-amber-600 p-10 rounded-3xl shadow-xl text-black">
            <h3 className="text-3xl font-bold mb-6">The <span className="text-black/80">Zekvian</span> Platform</h3>
            <p className="text-black/90 mb-6 leading-relaxed">
              <span className="text-black font-semibold">Zekvian</span> is more than just automation software - it's a comprehensive ecosystem designed to transform how businesses operate. Our platform combines AI-powered workflows, intelligent data processing, and seamless integrations to create a unified automation experience.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-black/70 rounded-full"></div>
                <span>AI-Powered Workflow Engine</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-black/70 rounded-full"></div>
                <span>Real-time Analytics Dashboard</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-black/70 rounded-full"></div>
                <span>Enterprise-grade Security</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-black/70 rounded-full"></div>
                <span>500+ Pre-built Integrations</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800/80 to-black/80 border border-yellow-500/30 p-10 rounded-3xl shadow-xl">
            <h3 className="text-3xl font-bold text-white mb-6">Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">Zekvian</span>?</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Unlike traditional automation tools, <span className="text-yellow-400 font-semibold">Zekvian</span> was built from the ground up for the modern enterprise. We understand that every business is unique, which is why our platform adapts to your specific needs rather than forcing you to change your processes.
            </p>
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 border border-yellow-500/30 rounded-xl">
                <h4 className="font-semibold text-white mb-2">No-Code Automation</h4>
                <p className="text-gray-300 text-sm">Build complex workflows without writing a single line of code</p>
              </div>
              <div className="p-4 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-500/30 rounded-xl">
                <h4 className="font-semibold text-white mb-2">Scalable Architecture</h4>
                <p className="text-gray-300 text-sm">Grows with your business from startup to enterprise</p>
              </div>
              <div className="p-4 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 border border-yellow-500/30 rounded-xl">
                <h4 className="font-semibold text-white mb-2">24/7 Support</h4>
                <p className="text-gray-300 text-sm">Expert support team available around the clock</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-800/80 to-black/80 border border-yellow-500/30 p-12 rounded-3xl shadow-2xl text-white mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-6">The <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">Zekvian</span> Difference</h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how <span className="text-yellow-400 font-semibold">Zekvian</span> compares to traditional automation solutions and why industry leaders choose us for their digital transformation journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-yellow-500/30">
                <span className="text-2xl font-bold text-black">10x</span>
              </div>
              <h4 className="text-xl font-bold mb-3">Faster Implementation</h4>
              <p className="text-gray-300">Deploy automation workflows in days, not months, with <span className="text-yellow-400">Zekvian's</span> intuitive platform</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-amber-500/30">
                <span className="text-2xl font-bold text-black">50%</span>
              </div>
              <h4 className="text-xl font-bold mb-3">Cost Reduction</h4>
              <p className="text-gray-300">Average cost savings achieved by companies switching to <span className="text-yellow-400">Zekvian</span> from legacy systems</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-600 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-yellow-500/30">
                <span className="text-2xl font-bold text-black">99%</span>
              </div>
              <h4 className="text-xl font-bold mb-3">Customer Satisfaction</h4>
              <p className="text-gray-300">Customer satisfaction rate based on our latest survey of <span className="text-yellow-400">Zekvian</span> users worldwide</p>
            </div>
          </div>
        </div>

        {/* <div className="bg-gradient-to-r from-yellow-500 to-amber-600 p-12 rounded-3xl shadow-2xl text-black text-center">
          <h3 className="text-3xl font-bold mb-6">Join the <span className="text-black/80">Zekvian</span> Revolution</h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-black/90">
            Ready to transform your business with intelligent automation? Join thousands of companies already using <span className="text-black font-semibold">Zekvian</span> to streamline their operations and accelerate growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-black text-yellow-400 font-bold py-3 px-8 rounded-xl hover:bg-gray-900 transition-all duration-300 hover:shadow-lg hover:shadow-black/30">
              Start Free Trial
            </button>
            <button className="border-2 border-black text-black font-bold py-3 px-8 rounded-xl hover:bg-black hover:text-yellow-400 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;