import { Canvas } from "@react-three/fiber";

import Paragraph from "@/components/texts/paragraph";
import MeshForShader from "./meshForShader";
import { CanvasWrapper, Info } from "../projectStyles";

interface Props {}
export interface IFVector2 {
  x: number;
  y: number;
}

const BOSAniJ: React.FC<Props> = () => {
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
          <Paragraph>BOSAniJ</Paragraph>
        </div>
      </Info>
    </>
  );
};

export default BOSAniJ;