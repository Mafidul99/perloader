// components/AboutSection.jsx
import React from 'react';
import { Shield, Clock, Users, Award } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Service Availability',
    description: 'Operational all 365 days of the year',
  },
  {
    icon: Shield,
    title: 'Working Hours',
    description: 'From 9:00 AM to 7:00 PM',
  },
  {
    icon: Users,
    title: 'Trust',
    description: 'Commitment in service, consistency in trust',
  },
  {
    icon: Award,
    title: 'Customer First',
    description: 'Your satisfaction is our priority',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="px-4 py-20">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-[#228296] to-[#6f3c85] bg-clip-text text-transparent">
                NOFINO CREDIT
              </span>
            </h2>
            <h3 className="mb-4 text-xl text-gray-600 dark:text-gray-300">
              Co-Operative Society Ltd.
            </h3>
            <p className="mb-6 leading-relaxed text-justify text-gray-600 dark:text-gray-200">
              Nofino Credit Co-Operative Society Ltd. is not just a banking institution — it's a social initiative
              dedicated to understanding and supporting the financial needs of people, especially in
              rural areas. Our services are available 365 days a year, from 9:00 AM to 7:00 PM.
            </p>
            <a
              href="/about"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-[#228296] to-[#6f3c85] text-white font-semibold hover:shadow-lg transition-transform hover:scale-105"
            >
              Read More
            </a>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop"
              alt="About Us"
              className="object-cover w-full shadow-2xl rounded-2xl"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-6 mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 transition-all shadow-lg rounded-xl bg-slate-50 dark:bg-gray-900 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#228296] to-[#6f3c85] flex items-center justify-center mb-4">
                <feature.icon className="text-white bg-gradient-to-br from-[#228296] to-[#6f3c85]" size={24} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-800 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;