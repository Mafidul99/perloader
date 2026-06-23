// components/StatsSection.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Users, Building2, Briefcase, TrendingUp } from 'lucide-react';

const stats = [
  { icon: Users, label: 'Total Customer', value: 25000, suffix: '+' },
  { icon: TrendingUp, label: 'Total Business (Cr)', value: 41, suffix: '+' },
  { icon: Building2, label: 'Number Of Branches', value: 4, suffix: '+' },
  { icon: Briefcase, label: 'Number Of Staff', value: 39, suffix: '+' },
];

const AnimatedCounter = ({ end, suffix }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const step = Math.ceil(end / (duration / 16));
          const timer = setInterval(() => {
            start += step;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, 16);
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, hasAnimated]);

  return (
    <div ref={ref} className="text-center">
      <strong className="text-4xl font-bold text-white md:text-5xl">
        {count.toLocaleString()}
      </strong>
      <span className="ml-1 text-3xl text-white/80">{suffix}</span>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#228296] to-[#6f3c85]"></div>
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="container relative z-10 px-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-white/20">
                <stat.icon size={32} className="text-white" />
              </div>
              <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-lg font-medium text-white/90">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;