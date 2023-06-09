
import { useEffect, useState, useRef } from "react";
import { shaderMap } from "./shader/shaderMap";
import { Canvas } from "@react-three/fiber";
import ButtonBasic from "@/components/buttons/buttonBasic";
import Experience from "./Experience";

import type { IShaderSet, IFVector2 } from "@/types/fiber";
import type { ShaderMap } from "./shader/shaderMap";

import styles from "../../common/fiber.module.scss";

interface Props {}

const ProjectGlsl: React.FC<Props> = () => {
  const [shaderNumber, setShaderNumber] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [mousePos, setMousePos] = useState<IFVector2 | undefined>();
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
    <div className={styles["canvas-wrapper"]}>
      <div className={styles["canvas-main"]} ref={refCanvas}>
        {isOn && (
          <Canvas onCreated={created}>
            {shaderMap.map((shader: IShaderSet, index: number) => {
              if (shaderNumber === index) {
                return (
                  <Experience key={index} shader={shader} mousePos={mousePos} />
                );
              }
            })}
          </Canvas>
        )}
      </div>
      <div className={styles["canvas-info"]}>
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
      </div>
    </div>
  );
};

export default ProjectGlsl;
