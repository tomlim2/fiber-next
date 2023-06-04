import { Canvas } from "@react-three/fiber";
import MeshForShader from "./meshForShader";

interface Props {}



const BOSAniY: React.FC<Props> = () => {
  const created = (state: any) => {
    state.gl.setClearColor("#252525");
  };

  return (
    <Canvas onCreated={created}>
      <MeshForShader />
    </Canvas>
  );
};

export default BOSAniY;
