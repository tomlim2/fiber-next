import { Canvas } from "@react-three/fiber";

import Paragraph from "@/components/texts/paragraph";
import MeshForShader from "./meshForShader";
import { CanvasWrapper, Info } from "../projectStyles";

interface Props {}
export interface IFVector2 {
  x: number;
  y: number;
}

const BOSAniL: React.FC<Props> = () => {
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
            <h2>BOSAniL</h2>
          </div>
        </Info>
      </CanvasWrapper>
    </>
  );
};

export default BOSAniL;
