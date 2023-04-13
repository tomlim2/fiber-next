import { Canvas } from "@react-three/fiber";
import MeshForShader from "./meshForShader";
import { StrictMode } from "react";

interface Props {}

export interface IFVector2 {
  x: number;
  y: number;
}

const BOSAniAP: React.FC<Props> = () => {
  const created = (state: any) => {
    state.gl.setClearColor("#252525");
  };

  const eventHandler = (event: any, eventType: string) => {
    console.log(eventType);
  };

  return (
    <StrictMode>
      <Canvas
        onCreated={created}
        onPointerMissed={(event) => eventHandler(event, "onPointerMissed")}
      >
        <MeshForShader />
      </Canvas>
    </StrictMode>
  );
};

export default BOSAniAP;
