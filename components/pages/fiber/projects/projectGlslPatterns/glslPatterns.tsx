import { useState } from "react";
import { shaderMap } from "@/components/pages/fiber/projects/projectGlslPatterns/shader/shaderMap";
import type { ShaderMap } from "@/components/pages/fiber/projects/projectGlslPatterns/shader/shaderMap";
import { Canvas } from "@react-three/fiber";
import Paragraph from "@/components/texts/paragraph";
import ButtonBasic from "@/components/ui/buttonBasic";
import styled from "styled-components";

interface Props {}

const ProjectGlsl: React.FC<Props> = () => {
  const [shaderNumber, setShaderNumber] = useState(0);
  const created = (state: any) => {
    state.gl.setClearColor("#252525");
  };
  const onMouseEnter = (index: number) => {
    if (index !== shaderNumber) setShaderNumber(index);
  };
  const onClick = (index: number) => {
    if (index !== shaderNumber) setShaderNumber(index);
  };
  return (
    <>
      <CanvasWrapper>
        <Canvas onCreated={created}>
          <mesh scale={6}>
            <planeGeometry />
            {shaderMap.map((shader: ShaderMap, index: number) => {
              if (shaderNumber == index) {
                return (
                  <shaderMaterial
                    fragmentShader={shaderMap[shaderNumber].fragment}
                    vertexShader={shaderMap[shaderNumber].vertex}
                    key={index}
                  />
                );
              }
            })}
          </mesh>
        </Canvas>
      </CanvasWrapper>
      <Info>
        <div>
          <Paragraph>Shader patterns</Paragraph>
          <div className="buttons">
            {shaderMap.map((shader: ShaderMap, index: number) => (
              <ButtonBasic
                key={index}
                onClick={() => onClick(index)}
                onMouseEnter={() => onMouseEnter(index)}
                activated={shaderNumber == index}
              >
                PATTERN - {index + 1}
              </ButtonBasic>
            ))}
          </div>
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
