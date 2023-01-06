import { useState } from "react";
import { shaderMap } from "@/components/pages/fiber/projects/glsl/shader/shaderMap";
import type { ShaderMap } from "@/components/pages/fiber/projects/glsl/shader/shaderMap";
import { Canvas } from "@react-three/fiber";
import { Title } from "@/components/texts/text";
import ProjectFramer from "@/components/pages/fiber/projects/projectFramer";
import Paragraph from "@/components/texts/paragraph";
import ButtonBasic from "@/components/buttons/buttonBasic";
import styled from "styled-components";

interface Props {}

const ProjectGlsl: React.FC<Props> = () => {
  const [shaderNumber, setShaderNumber] = useState(0);
  const created = (state: any) => {
    state.gl.setClearColor("#252525");
  };
  const onMouseEnter = (index: number) => {
    setShaderNumber(index);
  };
  return (
    <ProjectFramer>
      <div>
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
      </div>
      <Info>
        <div>
          <Title usage="title">GLSL</Title>
          <Paragraph>Setup references</Paragraph>
          <div className="buttons">
            {shaderMap.map((shader: ShaderMap, index: number) => (
              <ButtonBasic
                key={index}
                usage={"border"}
                onMouseEnter={() => onMouseEnter(index)}
                disabled={shaderNumber == index}
              >
                PATTERN - {index}
              </ButtonBasic>
            ))}
          </div>
        </div>
      </Info>
    </ProjectFramer>
  );
};

export default ProjectGlsl;

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
