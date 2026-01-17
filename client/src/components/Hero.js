import React, { useState, useEffect } from "react";
import { ArrowRight, Play, Zap, Cpu, BarChart3, Sparkles } from "lucide-react";

const Hero = ({ scrollToSection }) => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [typewriterText, setTypewriterText] = useState('');
  const [morphingWord, setMorphingWord] = useState(0);
  const [glitchActive, setGlitchActive] = useState(false);

  const features = [
    { icon: Zap, text: "AI-Powered Automation", color: "from-yellow-500 to-amber-600" },
    { icon: Cpu, text: "Smart Analytics", color: "from-amber-500 to-yellow-500" },
    { icon: BarChart3, text: "Real-time Insights", color: "from-yellow-600 to-amber-500" }
  ];

  const morphingWords = ['AUTOMATE', 'INNOVATE', 'ACCELERATE', 'DOMINATE'];
  const typewriterPhrases = [
    'Revolutionize your business operations with AI-powered automation.',
    'Transform workflows with quantum-speed processing.',
    'Scale enterprise solutions beyond your ambitions.',
    'Unleash the power of next-generation technology.'
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentFeature(prev => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  // Typewriter effect
  useEffect(() => {
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    const typeWriter = () => {
      const currentPhrase = typewriterPhrases[phraseIndex];
      
      if (isDeleting) {
        setTypewriterText(currentPhrase.substring(0, charIndex - 1));
        charIndex--;
        
        if (charIndex === 0) {
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % typewriterPhrases.length;
        }
      } else {
        setTypewriterText(currentPhrase.substring(0, charIndex + 1));
        charIndex++;
        
        if (charIndex === currentPhrase.length) {
          setTimeout(() => { isDeleting = true; }, 2000);
        }
      }
    };

    const timer = setInterval(typeWriter, isDeleting ? 30 : 80);
    return () => clearInterval(timer);
  }, []);

  // Morphing word effect
  useEffect(() => {
    const interval = setInterval(() => {
      setMorphingWord(prev => (prev + 1) % morphingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Glitch effect
  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
      </div>
      
      <div className="container-max relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          <div className={`text-left transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border border-yellow-500/30 px-4 py-2 rounded-full mb-6 hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300">
              <Sparkles className="w-4 h-4 text-yellow-400 mr-2 animate-spin" style={{ animationDuration: '4s' }} />
              <span className="text-yellow-400 text-sm font-medium animate-pulse">
                Next-Gen Automation Platform
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="inline-block animate-fade-in-up">Transform</span>{' '}
              <span className="inline-block animate-fade-in-up animate-delay-100">Your</span>{' '}
              <span className="inline-block animate-fade-in-up animate-delay-200">Business</span>{' '}
              <span className="inline-block animate-fade-in-up animate-delay-300">with</span>
              <div className="relative mt-2">
                <span 
                  className={`bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent block animate-shimmer ${
                    glitchActive ? 'animate-pulse' : ''
                  }`}
                  style={{
                    textShadow: glitchActive ? '2px 0 #ff0000, -2px 0 #00ff00' : 'none',
                    transform: glitchActive ? 'skew(-2deg)' : 'none'
                  }}
                >
                  ZEKVIAN
                </span>
              </div>
            </h1>

            {/* Typewriter Text */}
            <div className="h-20 mb-6">
              <p className="text-xl text-gray-300 leading-relaxed">
                <span className="font-mono">{typewriterText}</span>
                <span className="animate-ping text-yellow-400 ml-1">|</span>
              </p>
            </div>

            {/* Enhanced Brand Highlight */}
            <div className="mb-8">
              <div className="inline-flex items-center space-x-2">
                <span className="text-lg text-gray-400">Powered by</span>
                <span className="text-yellow-400 font-bold bg-yellow-500/20 px-3 py-1 rounded-lg border border-yellow-500/30 animate-pulse-glow">
                  Zekvian
                </span>
                <span className="text-lg text-gray-400">- Ready to</span>
                <div className="relative overflow-hidden">
                  <span 
                    key={morphingWord}
                    className="text-yellow-400 font-bold animate-scale-in"
                  >
                    {morphingWords[morphingWord]}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-black font-bold py-4 px-8 rounded-xl shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-3 group"
              >
                <span>Start Free Trial</span>
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>

            <div className="flex items-center space-x-8 text-gray-400">
              <div className="text-center group cursor-pointer hover-lift">
                <p className="text-2xl font-bold text-yellow-400 group-hover:scale-110 transition-transform duration-300 animate-pulse">
                  <span className="font-mono">2K+</span>
                </p>
                <p className="text-sm animate-fade-in-up">Active Users</p>
              </div>
              <div className="text-center group cursor-pointer hover-lift">
                <p className="text-2xl font-bold text-yellow-400 group-hover:scale-110 transition-transform duration-300 animate-pulse">
                  <span className="font-mono">99.9%</span>
                </p>
                <p className="text-sm animate-fade-in-up animate-delay-100">Uptime</p>
              </div>
              <div className="text-center group cursor-pointer hover-lift">
                <p className="text-2xl font-bold text-yellow-400 group-hover:scale-110 transition-transform duration-300 animate-pulse">
                  <span className="font-mono">200+</span>
                </p>
                <p className="text-sm animate-fade-in-up animate-delay-200">Integrations</p>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* 3D Morphing Cube Animation */}
            <div className="relative h-96 flex items-center justify-center">
              <div className="relative w-64 h-64" style={{ perspective: '1000px' }}>
                {/* Main Cube Container */}
                <div 
                  className="relative w-full h-full transform-gpu transition-transform duration-2000 ease-in-out"
                  style={{
                    transformStyle: 'preserve-3d',
                    animation: 'rotateCube 20s infinite linear'
                  }}
                >
                  {/* Cube Faces */}
                  {[
                    { face: 'front', transform: 'rotateY(0deg) translateZ(128px)', content: features[0] },
                    { face: 'back', transform: 'rotateY(180deg) translateZ(128px)', content: features[1] },
                    { face: 'right', transform: 'rotateY(90deg) translateZ(128px)', content: features[2] },
                    { face: 'left', transform: 'rotateY(-90deg) translateZ(128px)', content: features[0] },
                    { face: 'top', transform: 'rotateX(90deg) translateZ(128px)', content: features[1] },
                    { face: 'bottom', transform: 'rotateX(-90deg) translateZ(128px)', content: features[2] }
                  ].map((cube, index) => (
                    <div
                      key={cube.face}
                      className="absolute w-full h-full bg-gradient-to-br from-yellow-500/20 to-amber-500/20 border border-yellow-500/30 backdrop-blur-sm flex items-center justify-center"
                      style={{ transform: cube.transform }}
                    >
                      <div className="text-center">
                        <div className={`w-16 h-16 bg-gradient-to-r ${cube.content.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg animate-pulse`}>
                          {React.createElement(cube.content.icon, { size: 24, className: "text-black" })}
                        </div>
                        <p className="text-white font-semibold text-sm">{cube.content.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Floating Elements Around Cube */}
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-3 h-3 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full animate-float"
                    style={{
                      top: `${50 + Math.sin(i * Math.PI / 6) * 150}px`,
                      left: `${50 + Math.cos(i * Math.PI / 6) * 150}px`,
                      animationDelay: `${i * 0.3}s`,
                      animationDuration: `${3 + i * 0.2}s`,
                      boxShadow: '0 0 15px rgba(234, 179, 8, 0.5)'
                    }}
                  />
                ))}
                
                {/* Pulsing Rings */}
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute border border-yellow-400/20 rounded-full animate-ping"
                    style={{
                      width: `${300 + i * 50}px`,
                      height: `${300 + i * 50}px`,
                      top: `${-50 - i * 25}px`,
                      left: `${-50 - i * 25}px`,
                      animationDelay: `${i * 0.5}s`,
                      animationDuration: `${2 + i}s`
                    }}
                  />
                ))}
              </div>
              
              {/* Data Streams */}
              <div className="absolute inset-0">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-px bg-gradient-to-b from-yellow-400/50 via-amber-500/30 to-transparent animate-pulse"
                    style={{
                      height: '200px',
                      top: '20%',
                      left: `${20 + i * 15}%`,
                      animationDelay: `${i * 0.4}s`,
                      transform: `rotate(${i * 30}deg)`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
