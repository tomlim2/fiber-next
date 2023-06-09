import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";

interface Props {}

const BOSAniZ: React.FC<Props> = () => {
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
      <Experience />
    </Canvas>
  );
};

export default BOSAniZ;
