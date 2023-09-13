import { MeshTransmissionMaterial } from "@react-three/drei";
import { useControls } from "leva";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Color } from "three";

export default function Fox() {
  const { nodes, materials } = useGLTF(
    "/assets/models/emojis/emoji01B.glb"
  ) as any;
  const meshScale = 300;
  return (
    <group dispose={null}>
      {/* <MeshTransmissionMaterial {...config} /> */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part6.geometry}
        material={materials.Base}
        rotation={[Math.PI / 2, 0, 0]}
        scale={meshScale}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1.geometry}
        material={materials.Base}
        rotation={[Math.PI / 2, 0, 0]}
        scale={meshScale}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2.geometry}
        material={materials.Base}
        rotation={[Math.PI / 2, 0, 0]}
        scale={meshScale}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part3.geometry}
        material={materials.Base}
        rotation={[Math.PI / 2, 0, 0]}
        scale={meshScale}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part4.geometry}
        material={materials.Base}
        rotation={[Math.PI / 2, 0, 0]}
        scale={meshScale}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part5.geometry}
        material={materials.Base}
        rotation={[Math.PI / 2, 0, 0]}
        scale={meshScale}
      />
    </group>
  );
}
