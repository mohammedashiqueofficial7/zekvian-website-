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
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Security & Status
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Enterprise-grade security and transparency you can trust. Your data protection is our top priority.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Security Measures</h3>
            <div className="space-y-6">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon size={24} className="text-primary-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Compliance & Certifications</h3>
            <div className="space-y-4 mb-8">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <CheckCircle 
                      size={20} 
                      className={cert.status === 'Certified' ? 'text-green-500' : 'text-yellow-500'} 
                    />
                    <span className="font-medium text-gray-900">{cert.name}</span>
                  </div>
                  <div className="text-right">
                    <span className={`text-sm px-2 py-1 rounded-full ${
                      cert.status === 'Certified' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {cert.status}
                    </span>
                    <p className="text-xs text-gray-500 mt-1">{cert.date}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-primary-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Security Audits</h4>
              <p className="text-gray-600 mb-4">
                We conduct regular third-party security audits and penetration testing to ensure the highest level of protection.
              </p>
              <button className="text-primary-600 hover:text-primary-700 font-medium flex items-center space-x-2">
                <span>View Security Report</span>
                <ExternalLink size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Activity className="mr-3 text-primary-600" size={28} />
                System Status
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="font-medium text-gray-900">API Services</span>
                  </div>
                  <span className="text-green-600 font-medium">Operational</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="font-medium text-gray-900">Web Application</span>
                  </div>
                  <span className="text-green-600 font-medium">Operational</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="font-medium text-gray-900">Database</span>
                  </div>
                  <span className="text-green-600 font-medium">Operational</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="font-medium text-gray-900">Notifications</span>
                  </div>
                  <span className="text-yellow-600 font-medium">Degraded</span>
                </div>
              </div>

              <button className="mt-6 text-primary-600 hover:text-primary-700 font-medium flex items-center space-x-2">
                <span>View Full Status Page</span>
                <ExternalLink size={16} />
              </button>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Uptime & Performance</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-medium">Current Uptime</span>
                    <span className="text-2xl font-bold text-green-600">99.97%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '99.97%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-medium">Average Response Time</span>
                    <span className="text-lg font-semibold text-gray-900">142ms</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-medium">Last Update</span>
                    <span className="text-sm text-gray-600">10 minutes ago</span>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">SLA Commitment</h4>
                  <p className="text-sm text-gray-600">
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