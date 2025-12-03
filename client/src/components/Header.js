import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = ({ activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
    { name: 'Legal', id: 'legal' },
    { name: 'Security', id: 'security' },
    { name: 'FAQ', id: 'faq' },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container-max">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection('home')}
              className="text-2xl font-bold text-gray-900 hover:text-primary-600 transition-colors"
            >
              Zekvian
            </button>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-primary-600'
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary"
            >
              Request Demo
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => {
                  scrollToSection('contact');
                  setIsMenuOpen(false);
                }}
                className="block w-full mt-4 btn-primary"
              >
                Request Demo
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;