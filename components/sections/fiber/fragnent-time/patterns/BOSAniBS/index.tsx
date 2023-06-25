import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import { StrictMode } from "react";

const FiberCanvas: React.FC = () => {
  const created = (state: any) => {
    // state.gl.setClearColor("#f9f9f9");
  };

  const eventHandler = (event: Event, message: string) => {};

  return (
    <>
      <StrictMode>
        <Canvas
          onCreated={created}
          onPointerMissed={(event) => eventHandler(event, "onPointerMissed")}
        >
          <Experience />
        </Canvas>
      </StrictMode>
    </>
  );
};

export default FiberCanvas;
