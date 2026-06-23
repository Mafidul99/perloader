import React, { useEffect, useState } from 'react'
import Preloader from './Preloader';

const Loader = () => {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
    // Optional: Check if all assets are loaded
    if (document.readyState === 'complete') {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLoading(true);
    } else {
      window.addEventListener('load', () => setLoading(true));
      return () => window.removeEventListener('load', () => setLoading(true));
    }
  }, []);

  if (loading) {
    return <Preloader onLoadingComplete={() => setLoading(false)} />;
  }
  return (
    <div>Loader</div>
  )
}

export default Loader