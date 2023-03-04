import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
interface Props {
  canvasComponent: React.ReactNode;
  info: string;
}

export default function ProjectPost(props: Props) {
  const { canvasComponent, info } = props;
  const [isOn, setIsOn] = useState(false);
  const refCanvas = useRef<any>();

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const callback = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          setIsOn(true);
        } else {
          setIsOn(false);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(refCanvas.current);
  }, []);
  return (
    <ProjectFramer>
      <div ref={refCanvas}>{isOn && canvasComponent}</div>
    </ProjectFramer>
  );
}

interface FramerInterface {}

export const ProjectFramer = styled.li<FramerInterface>`
  display: flex;
  gap: 12px;
  min-height: 848px;
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