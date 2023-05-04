import { Canvas } from "@react-three/fiber";
import MeshForShader from "./meshForShader";

interface Props {}

export interface IFVector2 {
  x: number;
  y: number;
}

const BOSAniAM: React.FC<Props> = () => {
  const created = (state: any) => {
    state.gl.setClearColor("#252525");
  };

  const eventHandler = (event: any, eventType: string) => {
    console.log(eventType);
    
  };

  return (
    <Canvas
      onCreated={created}
      onPointerMissed={(event) => eventHandler(event, "onPointerMissed")}
    >
      <MeshForShader />
    </Canvas>
  );
};

export default BOSAniAM;
