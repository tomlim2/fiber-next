import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Paragraph from "@/components/texts/paragraph";
import styled from "styled-components";
import MeshForShader from "@/components/pages/fiber/projects/projectBookOfShadersAnimation/meshForShader";

interface Props {}
export interface IFVector2 {
  x: number;
  y: number;
}

const ProjectGlsl: React.FC<Props> = () => {
  const created = (state: any) => {
    state.gl.setClearColor("#252525");
  };

  return (
    <>
      <CanvasWrapper>
        <Canvas onCreated={created}>
          <MeshForShader />
        </Canvas>
      </CanvasWrapper>
      <Info>
        <div>
          <Paragraph>Book of shaders</Paragraph>
        </div>
      </Info>
    </>
  );
};

export default ProjectGlsl;

export const CanvasWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #252525;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .buttons {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 4px;
    margin-top: 16px;
  }
`;
