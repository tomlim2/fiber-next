import { useState } from "react";
import { shaderMap } from "@/components/pages/fiber/projects/GlslPatterns/shader/shaderMap";
import type { ShaderMap } from "@/components/pages/fiber/projects/GlslPatterns/shader/shaderMap";
import { Canvas } from "@react-three/fiber";
import ButtonBasic from "@/components/ui/buttonBasic";
import { CanvasWrapper, Info } from "../projectStyles";

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
          <h2>Shader patterns</h2>
          <div className="buttons">
            {shaderMap.map((shader: ShaderMap, index: number) => (
              <ButtonBasic
                key={index}
                onClick={() => onClick(index)}
                onMouseEnter={() => onMouseEnter(index)}
                activated={shaderNumber == index}
              >
                {index + 1}
              </ButtonBasic>
            ))}
          </div>
        </div>
      </Info>
    </>
  );
};

export default ProjectGlsl;
