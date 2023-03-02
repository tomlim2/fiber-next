import styled from "styled-components";
interface Props {
  canvasComponent: React.ReactNode; 
  info: string; 
}

export default function ProjectPost(props: Props) {
  const { canvasComponent, info } = props;
  return (
    <ProjectFramer>
      <CanvasWrapper>{canvasComponent}</CanvasWrapper>
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

export const CanvasWrapper = styled.div`
  position: relative;
  width: 800px;
  height: 800px;
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
