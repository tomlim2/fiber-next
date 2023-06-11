import { Canvas } from "@react-three/fiber";
import MeshForShader from "./meshForShader";
import { StrictMode } from "react";

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
        >
          <MeshForShader />
        </Canvas>
      </StrictMode>
    </>
  );
};

export default FiberCanvas;
