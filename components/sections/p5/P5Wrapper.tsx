import React, { useRef, useEffect } from "react";
import styled from "styled-components";

import p5 from "p5";

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

  return (
    <SectionWrapper>
      <Container>
        <div ref={canvasRef} />
      </Container>
    </SectionWrapper>
  );
};

export default P5Wrapper;

export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.ul`
  width: 648px;
  margin-top: 48px;
  padding-bottom: 48px;
`;
