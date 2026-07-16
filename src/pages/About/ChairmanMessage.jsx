import React from 'react';
import { Quote, Award, Target, Users, Shield, Clock, ChevronRight } from 'lucide-react';
import imageMessage from '../../assets/icon/Confetti.svg';

const ChairmanMessage = () => {
  const ChairmanMessage = import.meta.env.VITE_APP_WEB_TITLE || "NTCCSL";
  return (
    <>
    <section className="py-16 overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 ">
      <div className="container px-4 mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center px-3 py-1 mb-4 text-sm font-semibold text-white bg-gradient-to-r from-[#228296] to-[#6f3c85] rounded-full">
            <Award size={16} className="mr-2" />
            Leadership Desk
          </div>
          <h2 className="mb-2 text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">
            Chairman's {''}
                <span className="bg-gradient-to-r from-[#228296] to-[#6f3c85] bg-clip-text text-transparent">
                Message
              </span>
          </h2>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-[#228296] to-[#6f3c85] rounded-full"></div>
          <p className="max-w-2xl mx-auto mt-2 text-gray-600 dark:text-gray-300">
            A word from our leadership about our vision, values, and commitment to excellence
          </p>
        </div>

        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-stretch">
          {/* Chairman Image Section */}
          <div className="relative flex-1">
            <div className="relative overflow-hidden shadow-2xl rounded-2xl">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#228296]/20 to-[#6f3c85]/20 z-10"></div>
              
              {/* Image placeholder - Replace with actual image */}
              <div className="relative h-96 lg:h-full min-h-[400px] bg-gradient-to-br from-[#228296] to-[#6f3c85] flex items-center justify-center">
                <img 
                  src={imageMessage} 
                  alt="Chairman" 
                  className="object-cover w-full h-full opacity-90"
                />
                {/* Overlay text for demo - remove when using actual image */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <div className="text-center text-white">
                    <Users size={48} className="mx-auto mb-2" />
                    <p className="text-lg font-semibold">Chairman Photo</p>
                    <p className="text-sm">{ChairmanMessage}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats/Info Cards */}
            <div className="absolute -bottom-6 left-6 right-6">
              <div className="grid grid-cols-2 gap-4 p-4 shadow-lg rounded-xl dark:bg-gray-900 bg-slate-50">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#228296]">25+</div>
                  <div className="text-xs text-gray-600 ">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#6f3c85]">5L+</div>
                  <div className="text-xs text-gray-600 ">Happy Customers</div>
                </div>
              </div>
            </div>
          </div>

          {/* Message Content Section */}
          <div className="flex-1 space-y-6">
            {/* Quote Icon */}
            <div className="relative">
              <Quote size={40} className="text-[#6f3c85]/60 absolute -top-2 -left-2" />
              <div className="relative z-10 p-6 shadow-lg rounded-2xl dark:bg-gray-900/50 ">
                <p className="text-lg italic leading-relaxed text-gray-700 dark:text-gray-300">
                  "At Shantishwar Bank, we believe that banking is not just about transactions, 
                  but about building lasting relationships and empowering dreams. Our commitment 
                  to excellence and customer-centric approach has been the cornerstone of our 
                  success story."
                </p>
              </div>
            </div>

            {/* Main Message */}
            <div className="space-y-4 text-gray-600 dark:text-gray-200">
              <p>
                Dear Valued Customers and Stakeholders,
              </p>
              <p>
                It is with immense pride and gratitude that I address you today. Over the years, 
                Shantishwar Bank has grown from strength to strength, driven by our unwavering 
                commitment to financial inclusion, innovation, and integrity.
              </p>
              <p>
                In an era of rapid digital transformation, we have embraced technology to make 
                banking more accessible, convenient, and secure for you. From our humble beginnings 
                to becoming a trusted financial partner for thousands of families and businesses, 
                our journey has been shaped by your trust and our team's dedication.
              </p>
              <p>
                We remain committed to providing:
              </p>
            </div>

            {/* Key Points Grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex items-start p-4 space-x-3 rounded-lg shadow-md dark:bg-gray-900 bg-slate-50">
                <Shield className="flex-shrink-0 text-[#228296]" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Secure Banking</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">State-of-the-art security measures</p>
                </div>
              </div>
              <div className="flex items-start p-4 space-x-3 rounded-lg shadow-md dark:bg-gray-900 bg-slate-50">
                <Target className="flex-shrink-0 text-[#6f3c85]" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Customer First</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Personalized banking solutions</p>
                </div>
              </div>
              <div className="flex items-start p-4 space-x-3 rounded-lg shadow-md dark:bg-gray-900 bg-slate-50">
                <Clock className="flex-shrink-0 text-[#228296]" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">24/7 Support</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Round-the-clock assistance</p>
                </div>
              </div>
              <div className="flex items-start p-4 space-x-3 rounded-lg shadow-md dark:bg-gray-900 bg-slate-50">
                <Award className="flex-shrink-0 text-[#6f3c85]" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Best Rates</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Competitive interest rates</p>
                </div>
              </div>
            </div>

            {/* Signature Section */}
            <div className="pt-6 mt-6 border-t border-gray-200 dark:border-gray-900">
              <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
                <div className="mb-4 sm:mb-0">
                  <div className="mb-2 font-serif text-2xl text-gray-800 dark:text-white">
                    Shri. Shantishwar Patil
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-300">
                    Chairman & Managing Director
                  </div>
                  <div className="text-xs text-gray-400 dark:text-gray-400">
                    {ChairmanMessage}
                  </div>
                </div>
                
                {/* CTA Button */}
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 font-semibold text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-[#228296] to-[#6f3c85] hover:shadow-xl hover:scale-105 group"
                >
                  <span>Connect With Us</span>
                  <ChevronRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Additional Quote */}
            <div className="p-4 mt-6 text-center bg-gradient-to-r from-[#228296]/5 to-[#6f3c85]/5 rounded-xl">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                "Together, let's build a stronger, financially inclusive India. Your dreams are our mission."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ChairmanMessage;