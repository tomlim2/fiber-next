import { useEffect, useRef, useState, RefObject } from "react";
import styled from "styled-components";

interface Props {
  children: any;
  title?: string;
  isOn: boolean;
}

const ProjectFramer: React.FC<Props> = ({
  children,
  title = "pattern",
  isOn,
}) => {

  const Skeleton = (
    <>
      <div className="skeleton-canvas"></div>
      <div className="skeleton-info">
        <div>
          <div className="skeleton-info-title"></div>
          <div className="skeleton-info-button"></div>
        </div>
      </div>
    </>
  );

  return (
    <Framer>
      {isOn ? children : Skeleton}
    </Framer>
  );
};

export default ProjectFramer;

interface FramerInterface {
  
}

export const Framer = styled.section<FramerInterface>`
  display: grid;
  gap: 24px;
  grid-template-columns: calc(100vh - 24px) 1fr;
  height: 100vh;
  padding: 24px;
  scroll-snap-align: start;

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
