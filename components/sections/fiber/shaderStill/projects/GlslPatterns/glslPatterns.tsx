import { useEffect, useState, useRef } from "react";
import { shaderMap } from "./shader/shaderMap";
import type { ShaderMap } from "./shader/shaderMap";
import { Canvas } from "@react-three/fiber";
import ButtonBasic from "@/components/ui/buttonBasic";
import {
  ProjectFramer,
  CanvasWrapper,
  Info,
} from "@/components/sections/fiber/shaderPatterns/postAni";

interface Props {}

const ProjectGlsl: React.FC<Props> = () => {
  const [shaderNumber, setShaderNumber] = useState(0);
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
    <ProjectFramer>
      <CanvasWrapper ref={refCanvas}>
        {isOn && (
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
        )}
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
    </ProjectFramer>
  );
};

export default ProjectGlsl;
