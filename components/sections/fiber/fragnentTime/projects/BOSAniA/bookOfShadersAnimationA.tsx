import { Canvas } from "@react-three/fiber";
import MeshForShader from "@/components/sections/fiber/fragnentTime/projects/BOSAniA/meshForShader";

interface Props {}

const BookOfShadersAnimationA: React.FC<Props> = () => {
  const created = (state: any) => {
    state.gl.setClearColor("#252525");
  };

  return (
    <Canvas onCreated={created}>
      <MeshForShader />
    </Canvas>
  );
};

export default BookOfShadersAnimationA;
