import { Canvas } from "@react-three/fiber";
import { StrictMode, useState } from "react";
import MeshForShader from "./meshForShader";

interface Props {}

const BOSAniAZ: React.FC<Props> = () => {
  const [ctloffsetX, setCtloffsetX] = useState(0);
  const created = (state: any) => {
    // state.gl.setClearColor("#252525");
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
          <MeshForShader ctloffsetX={ctloffsetX} />
        </Canvas>
      </StrictMode>
    </>
  );
};

export default BOSAniAZ;
