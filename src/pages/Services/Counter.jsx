import React, { useEffect, useState } from 'react'

const Counter = ({ end, duration = 2000, suffix = '' }) => {

    const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const increment = end / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(`counter-${end}`);
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
   <div id={`counter-${end}`}>
      <span className="text-4xl font-bold md:text-5xl">{count}</span>
      <span className="text-2xl">{suffix}</span>
    </div>
  )
}

export default Counter