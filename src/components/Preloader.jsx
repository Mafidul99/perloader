
import { useEffect, useRef } from 'react';
import './Preloader.css'; // Import the CSS for the preloader

const Preloader = ({ onLoadingComplete }) => {
  const preloaderRef = useRef(null);

  useEffect(() => {
    // Simulate loading time (or wait for actual resources)
    const timer = setTimeout(() => {
      if (preloaderRef.current) {
        preloaderRef.current.classList.add('opacity-0', 'invisible');
        setTimeout(() => {
          if (onLoadingComplete) onLoadingComplete();
        }, 700);
      }
    }, 2000); // Adjust timing as needed

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <div
      ref={preloaderRef}
      id="preloader"
      className="fixed inset-0 z-50 flex items-center justify-center transition-all duration-700 bg-gradient-to-br from-slate-50 to-slate-200 dark:from-slate-950 dark:to-slate-900"
    >
      <div className="relative w-full max-w-4xl px-4 mx-auto">
        <div className="relative flex flex-col items-center justify-center min-h-[60vh]">
          {/* Decorative Rings Container */}
          <div className="relative flex items-center justify-center mb-8">
            {/* Outer Ring */}
            <div className="loader-ring-outer absolute w-40 h-40 rounded-full border-[3px] border-transparent border-t-teal-400 border-r-purple-400 border-b-cyan-400 border-l-transparent"></div>
            {/* Middle Ring */}
            <div className="absolute w-32 h-32 border-2 border-transparent rounded-full loader-ring-inner border-t-pink-400 border-r-transparent border-b-purple-400 border-l-teal-400"></div>
            {/* Inner Glow Ring */}
            <div className="absolute rounded-full w-36 h-36 bg-gradient-to-br from-teal-500/20 to-purple-600/20 blur-xl animate-pulse"></div>
            {/* Pulsing Effect Rings */}
            <div className="absolute w-40 h-40 border rounded-full border-teal-400/30 animate-pulse-ring"></div>
            <div className="absolute border rounded-full w-52 h-52 border-purple-400/20 animate-pulse-ring" style={{ animationDelay: '1s' }}></div>
            {/* Logo Container */}
            <div className="relative z-10">
              <div className="flex flex-col items-center justify-center">
                {/* Glow behind logo */}
                <div className="absolute inset-0 rounded-full opacity-50 bg-gradient-to-r from-teal-400 to-purple-600 blur-2xl"></div>
                {/* Logo Image */}
                <img 
                  src="/OQPX091.png" 
                  alt="Nebula Logo" 
                  className="relative w-20 h-20 md:w-32 md:h-32 animate-float-bounce drop-shadow-2xl"
                  onError={(e) => { 
                    e.target.src = 'https://via.placeholder.com/128?text=Logo'; 
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;