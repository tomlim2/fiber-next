import { Canvas } from "@react-three/fiber";
import WapperFiber from "components/pages/fiber/wrapperFiber";
import { useRef } from "react";
import type { Ref } from "react";
import type { Group, Mesh, BufferGeometry, Material } from "three";

interface Props {}

const VariantFiber1: React.FC<Props> = () => {
  const groupRef = useRef() as Ref<Group> | undefined;
  const cubeRef = useRef() as
    | Ref<Mesh<BufferGeometry, Material | Material[]>>
    | undefined;
  return (
    <WapperFiber title="fiber1">
      <Canvas>
        <group ref={groupRef}>
          <mesh position-x={-2}>
            <sphereGeometry />
            <meshStandardMaterial color={"#777"} />
          </mesh>
          <mesh
            ref={cubeRef}
            rotation-y={Math.PI * 0.25}
            position-x={2}
            scale={1.5}
          >
            <boxGeometry />
            <meshStandardMaterial color={"#555"} />
          </mesh>
        </group>

        <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
          <planeGeometry />
          <meshStandardMaterial color={"#333"} />
        </mesh>
      </Canvas>
    </WapperFiber>
  );
};

export default VariantFiber1;
