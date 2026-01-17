import React from 'react';
import { Shield, Lock, Server, Eye, CheckCircle, ExternalLink, Activity } from 'lucide-react';

const Security = () => {
  const securityFeatures = [
    {
      icon: Lock,
      title: 'End-to-End Encryption',
      description: 'All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption.'
    },
    {
      icon: Server,
      title: 'Secure Infrastructure',
      description: 'Hosted on enterprise-grade cloud infrastructure with 24/7 monitoring and automated backups.'
    },
    {
      icon: Eye,
      title: 'Access Controls',
      description: 'Role-based access control (RBAC) with multi-factor authentication and single sign-on (SSO) support.'
    },
    {
      icon: Shield,
      title: 'Compliance Ready',
      description: 'SOC 2 Type II certified with GDPR, HIPAA, and ISO 27001 compliance frameworks.'
    }
  ];

  const certifications = [
    { name: 'SOC 2 Type II', status: 'Certified', date: '2023' },
    { name: 'ISO 27001', status: 'In Progress', date: '2024' },
    { name: 'GDPR Compliant', status: 'Certified', date: '2023' },
    { name: 'HIPAA Ready', status: 'Certified', date: '2023' }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Security & <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600">Status</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Enterprise-grade security and transparency you can trust. Your data protection is our top priority.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Security Measures</h3>
            <div className="space-y-6">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-amber-500/20 border border-yellow-500/30 rounded-lg flex items-center justify-center flex-shrink-0 hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-105">
                    <feature.icon size={24} className="text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Compliance & Certifications</h3>
            <div className="space-y-4 mb-8">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-800/50 to-black/50 border border-yellow-500/20 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <CheckCircle 
                      size={20} 
                      className={cert.status === 'Certified' ? 'text-yellow-400' : 'text-amber-500'} 
                    />
                    <span className="font-medium text-white">{cert.name}</span>
                  </div>
                  <div className="text-right">
                    <span className={`text-sm px-2 py-1 rounded-full ${
                      cert.status === 'Certified' 
                        ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' 
                        : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                    }`}>
                      {cert.status}
                    </span>
                    <p className="text-xs text-gray-400 mt-1">{cert.date}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-yellow-500/10 to-amber-500/10 border border-yellow-500/30 p-6 rounded-lg hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300">
              <h4 className="text-lg font-semibold text-white mb-3">Security Audits</h4>
              <p className="text-gray-300 mb-4">
                We conduct regular third-party security audits and penetration testing to ensure the highest level of protection.
              </p>
              {/* <button className="group bg-gradient-to-r from-yellow-500 to-amber-500 text-black px-4 py-2 rounded-lg font-medium flex items-center space-x-2 hover:from-yellow-400 hover:to-amber-400 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/30">
                <span>View Security Report</span>
                <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
              </button> */}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-800/50 to-black/50 border border-yellow-500/20 rounded-lg p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Activity className="mr-3 text-yellow-400 animate-pulse" size={28} />
                System <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500 ml-2">Status</span>
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-900/80 to-black/80 border border-yellow-500/20 rounded-lg hover:border-yellow-400/40 transition-all duration-300 hover:shadow-md hover:shadow-yellow-500/10">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full animate-pulse shadow-lg shadow-yellow-500/50"></div>
                    <span className="font-medium text-white">API Services</span>
                  </div>
                  <span className="text-yellow-400 font-medium bg-yellow-500/10 px-2 py-1 rounded-full border border-yellow-500/30">Operational</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-900/80 to-black/80 border border-yellow-500/20 rounded-lg hover:border-yellow-400/40 transition-all duration-300 hover:shadow-md hover:shadow-yellow-500/10">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full animate-pulse shadow-lg shadow-yellow-500/50"></div>
                    <span className="font-medium text-white">Web Application</span>
                  </div>
                  <span className="text-yellow-400 font-medium bg-yellow-500/10 px-2 py-1 rounded-full border border-yellow-500/30">Operational</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-900/80 to-black/80 border border-yellow-500/20 rounded-lg hover:border-yellow-400/40 transition-all duration-300 hover:shadow-md hover:shadow-yellow-500/10">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full animate-pulse shadow-lg shadow-yellow-500/50"></div>
                    <span className="font-medium text-white">Database</span>
                  </div>
                  <span className="text-yellow-400 font-medium bg-yellow-500/10 px-2 py-1 rounded-full border border-yellow-500/30">Operational</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-900/80 to-black/80 border border-amber-500/20 rounded-lg hover:border-amber-400/40 transition-all duration-300 hover:shadow-md hover:shadow-amber-500/10">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full animate-pulse shadow-lg shadow-amber-500/50"></div>
                    <span className="font-medium text-white">Notifications</span>
                  </div>
                  <span className="text-amber-400 font-medium bg-amber-500/10 px-2 py-1 rounded-full border border-amber-500/30">Degraded</span>
                </div>
              </div>

              {/* <button className="group mt-6 bg-gradient-to-r from-yellow-500 to-amber-500 text-black px-4 py-2 rounded-lg font-medium flex items-center space-x-2 hover:from-yellow-400 hover:to-amber-400 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/30">
                <span>View Full Status Page</span>
                <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
              </button> */}
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Uptime & <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">Performance</span></h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 font-medium">Current Uptime</span>
                    <span className="text-2xl font-bold text-yellow-400">99.97%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                    <div className="bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 h-2 rounded-full shadow-lg shadow-yellow-500/30 animate-shimmer" style={{ width: '99.97%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 font-medium">Average Response Time</span>
                    <span className="text-lg font-semibold text-white">142ms</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 font-medium">Last Update</span>
                    <span className="text-sm text-gray-400">10 minutes ago</span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-gray-900/80 to-black/80 border border-yellow-500/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-white mb-2">SLA Commitment</h4>
                  <p className="text-sm text-gray-300">
                    We guarantee 99.9% uptime with automatic failover and 24/7 monitoring. 
                    Service credits available for SLA breaches.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;