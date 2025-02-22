import { useEffect, useState } from 'react';

export const useWindowResize = () => {
  const [currentSize, setCurrentSize] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setCurrentSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return currentSize;
};
