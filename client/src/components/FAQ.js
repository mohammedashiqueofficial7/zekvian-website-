import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set([0]));

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqs = [
    {
      question: 'What are the multi-tenant limits and capabilities?',
      answer: 'Our platform supports unlimited tenants with isolated data and customizable resource allocation. Each tenant can have up to 10,000 users, 1TB storage, and custom branding. Enterprise plans offer unlimited scaling.'
    },
    {
      question: 'How does pricing work and what payment options are available?',
      answer: 'We offer flexible pricing tiers starting at $29/month for small teams up to $299/month for enterprise. Annual billing provides 20% discount. We accept all major credit cards, ACH transfers, and can accommodate purchase orders for enterprise clients.'
    },
    {
      question: 'What customization options are available?',
      answer: 'Extensive customization including custom workflows, branded interfaces, API integrations, custom fields, and white-label options. Our Professional Services team can help with advanced customizations and integrations.'
    },
    {
      question: 'How does data portability work if I want to leave?',
      answer: 'You own your data completely. We provide full data export in standard formats (JSON, CSV, XML) at any time. No lock-in periods or export fees. We also offer migration assistance to help transfer to other platforms.'
    },
    {
      question: 'What is your Service Level Agreement (SLA)?',
      answer: 'We guarantee 99.9% uptime with automatic failover. Response times: Critical issues within 1 hour, high priority within 4 hours, standard within 24 hours. Service credits provided for SLA breaches.'
    },
    {
      question: 'What integration capabilities do you offer?',
      answer: 'REST APIs, webhooks, Zapier integration, and pre-built connectors for Salesforce, HubSpot, Slack, Microsoft 365, Google Workspace, and 200+ other applications. Custom integrations available through our Professional Services.'
    },
    {
      question: 'What are the technical requirements?',
      answer: 'Cloud-based solution requiring only a modern web browser (Chrome, Firefox, Safari, Edge). Mobile apps available for iOS and Android. No on-premise installation required. API access for custom integrations.'
    },
    {
      question: 'How do you handle security and compliance?',
      answer: 'SOC 2 Type II certified, GDPR compliant, HIPAA ready. End-to-end encryption, role-based access control, SSO support, and regular security audits. Data hosted in secure, certified data centers.'
    },
    {
      question: 'How do I manage user accounts and permissions?',
      answer: 'Comprehensive admin dashboard for user management, role-based permissions, team organization, and access controls. Support for SSO, SCIM provisioning, and automated user lifecycle management.'
    },
    {
      question: 'What support options are available?',
      answer: 'Email support for all plans, priority support for Pro+, phone support for Enterprise. Comprehensive documentation, video tutorials, webinar training, and dedicated customer success managers for Enterprise clients.'
    },
    {
      question: 'Can I try the platform before purchasing?',
      answer: 'Yes! 14-day free trial with full feature access, no credit card required. We also offer personalized demos and sandbox environments for testing with your own data.'
    },
    {
      question: 'How do you handle data backup and disaster recovery?',
      answer: 'Automated daily backups with 30-day retention, geo-redundant storage across multiple data centers, and 4-hour Recovery Time Objective (RTO) with 1-hour Recovery Point Objective (RPO) for Enterprise plans.'
    },
    {
      question: 'What happens during planned maintenance?',
      answer: 'Maintenance windows are scheduled during low-usage periods (typically weekends) with 48-hour advance notice. Most updates are deployed with zero downtime using blue-green deployment strategies.'
    },
    {
      question: 'Do you offer training and onboarding?',
      answer: 'Comprehensive onboarding program including guided setup, training sessions, documentation, and video tutorials. Enterprise clients receive dedicated onboarding specialists and custom training programs.'
    },
    {
      question: 'How do you handle feature requests and product updates?',
      answer: 'Regular product updates every 2 weeks, public roadmap, customer feedback portal, and quarterly feature planning sessions with key customers. Enterprise clients can influence roadmap priorities.'
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 via-accent-50 to-rose-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about <span className="text-primary-600 font-semibold bg-primary-100 px-2 py-1 rounded">Zekvian's</span> features, pricing, and implementation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-white to-primary-50 rounded-lg shadow-sm border border-primary-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  {openItems.has(index) ? (
                    <ChevronUp size={20} className="text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown size={20} className="text-gray-500 flex-shrink-0" />
                  )}
                </button>
                
                {openItems.has(index) && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-br from-white to-primary-50 p-8 rounded-lg shadow-sm border border-primary-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Still have questions?
              </h3>
              <p className="text-gray-600 mb-6">
                Can't find the answer you're looking for? Our <span className="text-primary-600 font-semibold">Zekvian</span> support team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:support@zekvian.com"
                  className="btn-primary"
                >
                  Contact Support
                </a>
                <button className="btn-secondary">
                  Schedule a Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;