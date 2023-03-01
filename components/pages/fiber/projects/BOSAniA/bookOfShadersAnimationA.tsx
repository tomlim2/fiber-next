import { Canvas } from "@react-three/fiber";
import MeshForShader from "@/components/pages/fiber/projects/BOSAniA/meshForShader";
import Paragraph from "@/components/texts/paragraph";
import { CanvasWrapper, Info } from "../projectStyles";

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
    <>
      <CanvasWrapper>
        <Canvas onCreated={created}>
          <MeshForShader />
        </Canvas>
      </CanvasWrapper>
      <Info>
        <div>
          <Paragraph>Translate</Paragraph>
        </div>
      </Info>
    </>
  );
};

export default BookOfShadersAnimationA;