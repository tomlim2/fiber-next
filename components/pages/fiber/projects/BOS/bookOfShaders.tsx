import { useEffect, useState } from "react";
import { shaderMap } from "@/components/pages/fiber/projects/BOS/shader/shaderMap";
import type { ShaderSet } from "@/components/pages/fiber/projects/BOS/shader/shaderMap";
import { Canvas } from "@react-three/fiber";
import Paragraph from "@/components/texts/paragraph";
import ButtonBasic from "@/components/ui/buttonBasic";
import MeshForShader from "@/components/pages/fiber/projects/BOS/meshForShader";
import { CanvasWrapper, Info } from "../projectStyles";

interface Props {}
export interface IFVector2 {
  x: number;
  y: number;
}

const BookOfShaders: React.FC<Props> = () => {
  const [shaderNumber, setShaderNumber] = useState(0);
  const [resolution, setResolution] = useState<IFVector2>();
  const [mousePos, setMousePos] = useState<IFVector2 | undefined>();

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
          {shaderMap.map((shader: ShaderSet, index: number) => {
            if (shaderNumber === index) {
              return (
                <MeshForShader
                  key={index}
                  shader={shader}
                  mousePos={mousePos}
                />
              );
            }
          })}
        </Canvas>
        <Info>
          <div>
            <h2>Book of shaders</h2>
            <div className="buttons">
              {shaderMap.map((shader: ShaderSet, index: number) => (
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
      </CanvasWrapper>
    </>
  );
};

export default BookOfShaders;
