import { Canvas } from "@react-three/fiber";
import MeshForShader from "./meshForShader";
import Paragraph from "@/components/texts/paragraph";
import { CanvasWrapper, Info } from "../projectStyles";

interface Props {}
export interface IFVector2 {
  x: number;
  y: number;
}

const BOSAniC: React.FC<Props> = () => {
  const created = (state: any) => {
    state.gl.setClearColor("#252525");
  };

  return (
    <>
      <CanvasWrapper>
        <Canvas onCreated={created}>
          <MeshForShader />
        </Canvas>
        <Info>
          <div>
            <Paragraph>Scale</Paragraph>
          </div>
        </Info>
      </CanvasWrapper>
    </>
  );
};

export default BOSAniC;
