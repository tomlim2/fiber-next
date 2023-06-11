import { Canvas } from "@react-three/fiber";
import { StrictMode, useState } from "react";
import Experience from "./Experience";

interface Props {}

const FiberCanvas: React.FC<Props> = () => {
  const created = (state: any) => {
    // state.gl.setClearColor("#252525");
  };

  const eventHandler = (event: Event, message: string) => {};

  return (
    <>
      <StrictMode>
        <Canvas
          onCreated={created}
          onPointerMissed={(event) => eventHandler(event, "onPointerMissed")}
          camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 3, 0] }}
        >
          <Experience />
        </Canvas>
      </StrictMode>
    </>
  );
};

export default FiberCanvas;
