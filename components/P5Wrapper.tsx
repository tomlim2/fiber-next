import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

interface P5WrapperProps {
  sketch: any;
}

const P5Wrapper: React.FC<P5WrapperProps> = ({ sketch }) => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const p5Instance = new p5(sketch, canvasRef.current);
      return () => {
        p5Instance.remove();
      };
    }
  }, [sketch]);

  return <div ref={canvasRef} />;
};

export default P5Wrapper;