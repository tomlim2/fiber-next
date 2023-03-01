import { Canvas } from "@react-three/fiber";

import MeshForShader from "./meshForShader";
import Paragraph from "@/components/texts/paragraph";
import { CanvasWrapper, Info } from "../projectStyles";

interface Props {}
export interface IFVector2 {
  x: number;
  y: number;
}

const BOSAniF: React.FC<Props> = () => {
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
          <Paragraph>AniF</Paragraph>
        </div>
      </Info>
    </>
  );
};

export default BOSAniF;