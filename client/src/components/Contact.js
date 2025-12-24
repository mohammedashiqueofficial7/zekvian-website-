import React, { useState, useEffect } from 'react';
import { Mail, Phone, Clock, Calendar, Send } from 'lucide-react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [serverStatus, setServerStatus] = useState('checking');

  useEffect(() => {
    axios.get('/api/health')
      .then(response => {
        setServerStatus(response.data.status === 'OK' ? 'online' : 'offline');
      })
      .catch(() => {
        setServerStatus('offline');
      });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    axios.post('/api/contact', formData)
      .then(() => {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
      })
      .catch(() => {
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus(''), 5000);
      });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50 py-20">
      <div className="container-max">
        <div className="text-center mb-20">
          <div className="inline-block p-2 bg-primary-100 rounded-full mb-6">
            <Mail className="text-primary-600" size={32} />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform your vision into reality. Our team is ready to discuss how Zekvian can revolutionize your business operations.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6">
                <Mail className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sales Team</h3>
              <p className="text-gray-600 mb-4">For demos, pricing, and partnerships</p>
              <a href="mailto:official.zekvian@gmail.com" className="text-primary-600 hover:text-primary-700 font-semibold">
                official.zekvian@gmail.com
              </a>
              <p className="text-sm text-gray-500 mt-2">Response: 2 hours</p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mb-6">
                <Phone className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Support Team</h3>
              <p className="text-gray-600 mb-4">Technical questions and support</p>
              <a href="mailto:official.zekvian@gmail.com" className="text-accent-600 hover:text-accent-700 font-semibold">
                official.zekvian@gmail.com
              </a>
              <p className="text-sm text-gray-500 mt-2">Response: 4 hours</p>
            </div>

            <div className="bg-gradient-to-br from-primary-500 to-accent-500 p-8 rounded-3xl shadow-xl text-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Calendar className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">Schedule Demo</h3>
              <p className="mb-6 opacity-90">Book a personalized demo session</p>
              <button className="w-full bg-white text-primary-600 font-semibold py-3 px-6 rounded-xl hover:bg-gray-100 transition-colors">
                Book Now
              </button>
            </div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-white/50">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Send us a Message</h3>
              <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-3">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-primary-100 focus:border-primary-500 transition-all placeholder-gray-500"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-3">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-primary-100 focus:border-primary-500 transition-all placeholder-gray-500"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-800 mb-3">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-primary-100 focus:border-primary-500 transition-all placeholder-gray-500"
                  placeholder="Your Company Inc."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-800 mb-3">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-primary-100 focus:border-primary-500 transition-all resize-none placeholder-gray-500"
                  placeholder="Tell us about your project and how we can help transform your business..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white font-bold py-5 px-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span className="text-lg">Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span className="text-lg">Send Message</span>
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl text-green-800">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="font-semibold">Message sent successfully! We'll get back to you within 24 hours.</span>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-6 bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 rounded-2xl text-red-800">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">!</span>
                    </div>
                    <span className="font-semibold">Error sending message. Please try again or contact us directly.</span>
                  </div>
                </div>
              )}
            </form>
            
            <div className="mt-8 pt-8 border-t border-gray-200 flex items-center justify-center gap-4 text-sm text-gray-500">
              <Clock size={16} />
              <span>Business hours: 9 AM - 6 PM IST</span>
              <div className={`w-2 h-2 rounded-full ${
                serverStatus === 'online' ? 'bg-green-500' : 
                serverStatus === 'offline' ? 'bg-red-500' : 'bg-yellow-500'
              }`}></div>
              <span className={serverStatus === 'online' ? 'text-green-600' : 
                serverStatus === 'offline' ? 'text-red-600' : 'text-yellow-600'}>
                Server {serverStatus === 'online' ? 'Online' : 
                  serverStatus === 'offline' ? 'Offline' : 'Checking...'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;