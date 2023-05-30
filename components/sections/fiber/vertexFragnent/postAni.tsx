import { useRecoilState } from "recoil";
import { currentShaderIndex } from "store/storeFiber";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

interface Props {
  canvasComponent: React.ReactNode;
  info: string;
  shaderIndex: number;
}

export default function ProjectPost(props: Props) {
  const [currentIndex, setCurrentIndex] = useRecoilState(currentShaderIndex);
  const { canvasComponent, info, shaderIndex } = props;
  const [isOn, setIsOn] = useState(false);
  const refCanvas = useRef<any>();

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-50%",
      threshold: 0,
    };

    const callback = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          setCurrentIndex(shaderIndex);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(refCanvas.current);
  });

  useEffect(() => {
    const isCurrentIndex: boolean = shaderIndex === currentIndex;
    const isPrevIndex: boolean = shaderIndex === currentIndex - 1;
    const isNextIndex: boolean = shaderIndex === currentIndex + 1;

    if (
      // isPrevIndex || isNextIndex || 
      isCurrentIndex) {
      setIsOn(true);
    } else {
      setIsOn(false);
    }
  }, [currentIndex, shaderIndex]);

  return (
    <ProjectFramer>
      <CanvasWrapper ref={refCanvas}>{isOn && canvasComponent}</CanvasWrapper>
      <Info>
        <div>
          <h2>{info}</h2>
        </div>
      </Info>
    </ProjectFramer>
  );
}

interface FramerInterface {}

export const ProjectFramer = styled.li<FramerInterface>`
  display: flex;
  gap: 12px;
  min-height: 648px;
  flex-direction: column;
  padding: 24px;
  margin-bottom: 48px;

  .skeleton-canvas {
    background-color: #252525;
  }
  .skeleton-info {
    display: flex;
    align-items: center;
    &-title {
      width: 180px;
      height: 24px;
      background-color: #252525;
    }
    &-button {
      width: 400px;
      height: 32px;
      margin-top: 12px;
      background-color: #252525;
    }
  }
`;

export const CanvasWrapper = styled.div`
  position: relative;
  width: 600px;
  height: 600px;
  background-color: #252525;
`;

export const Info = styled.div`
  h2 {
    color: #252525;
    font-size: 0.75rem;
  }

  .buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    width: 100%;
    margin-top: 16px;
  }

  @media only screen and (max-width: 600px) {
    align-items: start;

    .buttons {
      height: calc(100vh - 100vw - 48px);
      width: calc(100vw - 48px);
      overflow: auto;
    }
  }
`;
