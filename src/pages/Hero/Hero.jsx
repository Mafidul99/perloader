// components/Hero.jsx
import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Shield } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1600&h=600&fit=crop',
    title: 'Secure Your Future',
    subtitle: 'With Trusted Banking Solutions',
    description: 'Experience banking that puts your financial goals first with personalized solutions and expert guidance.',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1556742031-c6961e8560b0?w=1600&h=600&fit=crop',
    title: 'Digital Banking at Your Fingertips',
    subtitle: 'UPI, Mobile Banking & More',
    description: 'Manage your finances anytime, anywhere with our cutting-edge digital banking platform.',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?w=1600&h=600&fit=crop',
    title: 'Best Interest Rates',
    subtitle: 'On Fixed & Recurring Deposits',
    description: 'Grow your savings with competitive interest rates and flexible investment options.',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&h=600&fit=crop',
    title: 'Easy Loans',
    subtitle: 'Personal, Gold & Business Loans',
    description: 'Quick approval, minimal documentation, and flexible repayment options tailored for you.',
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  // Scroll to next section function
  const scrollToNextSection = () => {
    // Find the next section after hero
    // Option 1: Scroll to a specific section by ID
    const nextSection = document.getElementById('services') || 
                       document.querySelector('section:not(.hero)');
    
    if (nextSection) {
      nextSection.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    } else {
      // Option 2: Scroll to next section relative to current position
      const windowHeight = window.innerHeight;
      window.scrollTo({
        top: windowHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative h-[65vh] md:h-[65vh] lg:h-[65vh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/70 to-black/50"></div>
          <img
            src={slide.image}
            alt={slide.title}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 z-20 flex items-center px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
              <div className="max-w-4xl">
                {/* Animated Content */}
                <div className={`transform transition-all duration-700 delay-100 ${index === currentSlide
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                  }`}>
                  {/* Badge */}
                  <div className="inline-flex items-center px-3 py-1 mb-2 text-sm font-medium text-white bg-gradient-to-r from-[#228296] to-[#6f3c85] rounded-full">
                    <Shield size={14} className="mr-1" />
                    Trusted Since 1995
                  </div>

                  {/* Title */}
                  <h1 className="mb-3 text-4xl font-bold bg-gradient-to-r from-[#9b72ad] to-[#abdfea] bg-clip-text text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
                    {slide.title}
                  </h1>

                  {/* Subtitle */}
                  <p className="mb-3 text-lg text-blue-100 md:text-xl lg:text-2xl">
                    {slide.subtitle}
                  </p>

                  {/* Description */}
                  <p className="max-w-2xl mb-3 text-base text-gray-200 md:text-lg">
                    {slide.description}
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <a
                      href="/accounts"
                      className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-semibold text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-[#228296] to-[#6f3c85] hover:shadow-xl hover:scale-105"
                    >
                      <span>Open Account</span>
                      <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                    </a>
                    <a
                      href="/services"
                      className="inline-flex items-center justify-center px-8 py-3 font-semibold text-white transition-all duration-300 border rounded-lg bg-white/10 backdrop-blur-sm border-white/30 hover:bg-white/20 hover:scale-105"
                    >
                      Services
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute z-30 p-2 text-white transition -translate-y-1/2 rounded-full left-3 top-1/2 md:left-4 bg-black/30 hover:bg-black/50 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} className="md:w-6 md:h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute z-30 p-2 text-white transition -translate-y-1/2 rounded-full right-3 top-1/2 md:right-4 bg-black/30 hover:bg-black/50 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight size={20} className="md:w-6 md:h-6" />
      </button>
      
      {/* Dots - Bottom Right Corner */}
      <div className="absolute z-30 flex space-x-2 bottom-4 right-4 md:bottom-6 md:right-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="relative group"
            aria-label={`Go to slide ${index + 1}`}
          >
            {/* Outer ring animation for active dot */}
            <div className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-gradient-to-r from-[#228296] to-[#6f3c85] shadow-lg'
                : 'bg-white/50 hover:bg-white/80'
            }`}>
              {/* Pulsing ring animation for active dot */}
              {index === currentSlide && (
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="absolute w-5 h-5 rounded-full bg-gradient-to-r from-[#228296] to-[#6f3c85] opacity-40 animate-ping"></span>
                  <span className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-[#228296] to-[#6f3c85] opacity-60 animate-pulse"></span>
                </span>
              )}
            </div>
          </button>
        ))}
      </div>
      

      {/* Scroll Indicator - Now Working */}
      <button
        onClick={scrollToNextSection}
        className="absolute z-30 hidden mt-3 transform -translate-x-1/2 cursor-pointer bottom-4 left-1/2 md:block group"
        aria-label="Scroll to next section"
      >
        <div className="relative">
          {/* Animated ring */}
          <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-20"></div>
          
          {/* Scroll indicator box */}
          <div className="relative w-6 h-10 border-2 border-white rounded-full group-hover:border-[#228296] transition-colors duration-300">
            {/* Scrolling dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full animate-scrollDot group-hover:bg-[#228296] transition-colors duration-300"></div>
          </div>
        </div>
      </button>
    </section>
  );
};

export default Hero;