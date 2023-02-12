import { useEffect, useState } from "react";
import { shaderMap } from "@/components/pages/fiber/projects/projectBookOfShaders/shader/shaderMap";
import type { ShaderMap } from "@/components/pages/fiber/projects/projectBookOfShaders/shader/shaderMap";
import { Canvas } from "@react-three/fiber";
import Paragraph from "@/components/texts/paragraph";
import ButtonBasic from "@/components/ui/buttonBasic";
import styled from "styled-components";
import { Vector2 } from "three";

interface Props {}
interface IFVector2 {
  x: number;
  y: number;
}

const ProjectGlsl: React.FC<Props> = () => {
  const [shaderNumber, setShaderNumber] = useState(0);
  const [resolution, setResolution] = useState<IFVector2>();
  const [mousePos, setMousePos] = useState<IFVector2>();

  const created = (state: any) => {
    state.gl.setClearColor("#252525");
  };

  const onMouseEnter = (index: number) => {
    if (index !== shaderNumber) setShaderNumber(index);
  };

  const onClick = (index: number) => {
    if (index !== shaderNumber) setShaderNumber(index);
  };

  const checkResolution = () => {
    setResolution({ x: window.innerWidth, y: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener("resize", checkResolution);
    document.onmousemove = function (e) {
      setMousePos({ x: e.pageX, y: e.pageY });
    };
    return () => {
      window.removeEventListener("resize", checkResolution);
    };
  });

  return (
    <>
      <CanvasWrapper>
        <Canvas onCreated={created}>
          <mesh>
            <planeGeometry args={[6, 6]} />
            {shaderMap.map((shader: ShaderMap, index: number) => {
              if (shaderNumber == index) {
                return (
                  <shaderMaterial
                    uniforms={{
                      uResolution: { value: new Vector2() },
                      uTime: { value: new Vector2(6, 6) },
                      uMouse: { value: mousePos },
                    }}
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
          <Paragraph>Book of shaders</Paragraph>
          <div className="buttons">
            {shaderMap.map((shader: ShaderMap, index: number) => (
              <ButtonBasic
                key={index}
                onClick={() => onClick(index)}
                onMouseEnter={() => onMouseEnter(index)}
                activated={shaderNumber == index}
              >
                {shader.name}
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
