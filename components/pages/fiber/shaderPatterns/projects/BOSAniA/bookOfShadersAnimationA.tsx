import { Canvas } from "@react-three/fiber";
import MeshForShader from "@/components/pages/fiber/shaderPatterns/projects/BOSAniA/meshForShader";

interface Props {}
export interface IFVector2 {
  x: number;
  y: number;
}

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
