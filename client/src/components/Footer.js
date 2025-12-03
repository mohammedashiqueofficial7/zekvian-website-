import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

const Footer = ({ scrollToSection }) => {
  const navigation = {
    product: [
      { name: 'Features', action: () => scrollToSection('home') },
      { name: 'Pricing', action: () => scrollToSection('contact') },
      { name: 'Security', action: () => scrollToSection('security') },
      { name: 'Integrations', action: () => scrollToSection('home') }
    ],
    company: [
      { name: 'About', action: () => scrollToSection('about') },
      { name: 'Careers', href: '#' },
      { name: 'Press', action: () => scrollToSection('about') },
      { name: 'Blog', href: '#' }
    ],
    support: [
      { name: 'Help Center', href: '#' },
      { name: 'Contact', action: () => scrollToSection('contact') },
      { name: 'Status', action: () => scrollToSection('security') },
      { name: 'FAQ', action: () => scrollToSection('faq') }
    ],
    legal: [
      { name: 'Privacy', action: () => scrollToSection('legal') },
      { name: 'Terms', action: () => scrollToSection('legal') },
      { name: 'GDPR', action: () => scrollToSection('legal') },
      { name: 'Cookies', action: () => scrollToSection('legal') }
    ]
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'GitHub', icon: Github, href: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            <div className="lg:col-span-2">
              <button
                onClick={() => scrollToSection('home')}
                className="text-2xl font-bold mb-4 hover:text-primary-400 transition-colors"
              >
                Zekvian
              </button>
              <p className="text-gray-400 mb-6 max-w-sm">
                Transforming businesses with intelligent automation and enterprise-grade solutions.
              </p>
              
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <MapPin size={16} />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail size={16} />
                  <a href="mailto:hello@zekvian.com" className="hover:text-white transition-colors">
                    hello@zekvian.com
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone size={16} />
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Product</h3>
              <ul className="space-y-2">
                {navigation.product.map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={item.action}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Company</h3>
              <ul className="space-y-2">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    {item.action ? (
                      <button
                        onClick={item.action}
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        {item.name}
                      </button>
                    ) : (
                      <a
                        href={item.href}
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        {item.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Support</h3>
              <ul className="space-y-2">
                {navigation.support.map((item) => (
                  <li key={item.name}>
                    {item.action ? (
                      <button
                        onClick={item.action}
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        {item.name}
                      </button>
                    ) : (
                      <a
                        href={item.href}
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        {item.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Legal</h3>
              <ul className="space-y-2">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={item.action}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2023 Zekvian, Inc. All rights reserved.
            </p>
            
            <div className="flex space-x-4 mt-4 md:mt-0">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={item.name}
                >
                  <item.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;