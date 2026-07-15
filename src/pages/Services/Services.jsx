// components/Services.jsx
import React from 'react';
import {
  PiggyBank,
  Users,
  Globe,
  Phone,
  Calendar,
  TrendingUp,
  Shield,
  CreditCard,
} from 'lucide-react';

import depoIcon from '../../assets/icon/bank-deposit.svg';

const services = [
  {
    title: 'Savings Account',
    description: 'Secure savings with competitive interest rates',
    icon: {depoIcon},
    link: '/savings-account',
    gradient: 'from-[#228296] to-[#228296]/80',
  },
  {
    title: 'Personal Loan',
    description: 'Quick approval with minimal documentation',
    icon: Users,
    link: '/personal-loan',
    gradient: 'from-[#6f3c85] to-[#6f3c85]/80',
  },
  {
    title: 'Internet Banking',
    description: '24/7 access to your account online',
    icon: Globe,
    link: '/internet-banking',
    gradient: 'from-[#228296] to-[#6f3c85]',
  },
  {
    title: 'Customer Support',
    description: 'Dedicated support for all your queries',
    icon: Phone,
    link: '/contact',
    gradient: 'from-[#6f3c85] to-[#228296]',
  },
  {
    title: 'Recurring Deposit (SIP)',
    description: 'Build wealth with monthly deposits',
    icon: Calendar,
    link: '/recurring-deposit',
    gradient: 'from-[#228296] to-[#228296]/80',
  },
  {
    title: 'Fixed Deposit',
    description: 'Higher returns with flexible tenures',
    icon: TrendingUp,
    link: '/fixed-deposit',
    gradient: 'from-[#6f3c85] to-[#6f3c85]/80',
  },
  {
    title: 'Current Account',
    description: 'For businesses with high transaction needs',
    icon: Shield,
    link: '/current-account',
    gradient: 'from-[#228296] to-[#6f3c85]',
  },
  {
    title: 'Gold Loan',
    description: 'Instant loan against your gold',
    icon: CreditCard,
    link: '/gold-loan',
    gradient: 'from-[#6f3c85] to-[#228296]',
  },
];

const Services = () => {
  return (
    <section className="py-16">
      <div className="container px-4 mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">
            Our{' '}
            <span className="bg-gradient-to-r from-[#228296] to-[#6f3c85] bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#228296] to-[#6f3c85] mx-auto mt-4 rounded-full" />
          <p className="max-w-2xl mx-auto mt-4 text-gray-600 dark:text-gray-200">
            Comprehensive financial solutions tailored to your needs
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 transition-all duration-300 transform shadow-lg cursor-pointer group bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-900/50 rounded-xl hover:shadow-2xl hover:-translate-y-2"
            >
              <div
                className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="text-white" size={32} />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-800 dark:text-white">
                {service.title}
              </h3>
              <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                {service.description}
              </p>
              <a
                href={service.link}
                className="inline-flex items-center font-normal text-sm hover:underline bg-gradient-to-r from-[#228296] to-[#6f3c85] p-2 rounded text-white transition-colors duration-300"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;