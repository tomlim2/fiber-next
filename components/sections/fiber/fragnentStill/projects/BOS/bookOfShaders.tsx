import { useEffect, useState, useRef } from "react";
import { shaderMap } from "./shader/shaderMap";
import type { IShaderSet, IFVector2 } from "types/fiber";
import { Canvas } from "@react-three/fiber";
import ButtonBasic from "@/components/ui/buttonBasic";
import MeshForShader from "./meshForShader";
import {
  ProjectFramer,
  CanvasWrapper,
  Info,
} from "@/components/sections/fiber/common/postAni";

interface Props {}

const BookOfShaders: React.FC<Props> = () => {
  const [shaderNumber, setShaderNumber] = useState(0);
  const [resolution, setResolution] = useState<IFVector2>();
  const [mousePos, setMousePos] = useState<IFVector2 | undefined>();
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

  const checkResolution = () => {
    setResolution({ x: window.innerWidth, y: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener("resize", checkResolution);
    return () => {
      window.removeEventListener("resize", checkResolution);
    };
  });

  return (
    <ProjectFramer>
      <CanvasWrapper ref={refCanvas}>
        {isOn && (
          <Canvas onCreated={created}>
            {shaderMap.map((shader: IShaderSet, index: number) => {
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
        )}
      </CanvasWrapper>
      <Info>
        <div>
          <h2>Book of shaders</h2>
          <div className="buttons">
            {shaderMap.map((shader: IShaderSet, index: number) => (
              <ButtonBasic
                key={index}
                onClick={() => onClick(index)}
                onMouseEnter={() => onMouseEnter(index)}
                activated={shaderNumber == index}
              >
                {`${index + 1} ${shader.name}`}
              </ButtonBasic>
            ))}
          </div>
        </div>
      </Info>
    </ProjectFramer>
  );
};

export default BookOfShaders;
