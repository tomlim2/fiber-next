import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import { StrictMode, useState } from "react";

const FiberCanvas: React.FC = () => {
  const [ctloffsetX, setCtloffsetX] = useState(0);
  const created = (state: any) => {
    state.gl.setClearColor("#252525");
  };

  const eventHandler = (event: Event, message: string) => {};

  const onClick = () => {
    setCtloffsetX((prev) => prev + 1);
    console.log("ctloffsetX");
  };

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
