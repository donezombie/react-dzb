import { useState, useEffect } from 'react';

const useGetWidth = (props) => {
  const currentWidth = document.body.offsetWidth;
  const [width, setWidth] = useState(currentWidth);

  useEffect(() => {
    const handler = () => {
      setWidth(document.body.offsetWidth);
    };
    window.addEventListener('resize', handler);

    return () => {
      window.removeEventListener('resize', handler);
    };
  }, []);

  return width;
};

export default useGetWidth;
