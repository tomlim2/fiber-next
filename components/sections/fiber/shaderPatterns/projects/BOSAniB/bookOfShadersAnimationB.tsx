import { Canvas } from "@react-three/fiber";
import MeshForShader from "./meshForShader";
import Paragraph from "@/components/texts/paragraph";
import { CanvasWrapper, Info } from "../projectStyles";

interface Props {}


const BookOfShadersAnimationB: React.FC<Props> = () => {
  const created = (state: any) => {
    state.gl.setClearColor("#252525");
  };

  return (
    <Canvas onCreated={created}>
      <MeshForShader />
    </Canvas>
  );
};

export default BookOfShadersAnimationB;
