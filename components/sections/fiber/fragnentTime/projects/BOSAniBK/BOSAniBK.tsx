import { StrictMode, useState } from "react";
import { Canvas } from "@react-three/fiber";
import MeshForShader from "./meshForShader";

interface Props {}

const BOSAniBK: React.FC<Props> = () => {
  const created = (state: any) => {
    state.gl.setClearColor("#252525");
  };

  const eventHandler = (event: Event, message: string) => {};

  return (
    <>
      <StrictMode>
        <Canvas
          onCreated={created}
          onPointerMissed={(event) => eventHandler(event, "onPointerMissed")}
        >
          <MeshForShader />
        </Canvas>
      </StrictMode>
    </>
  );
};

export default BOSAniBK;
