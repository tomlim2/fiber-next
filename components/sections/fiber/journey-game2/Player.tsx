import { useKeyboardControls } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";

export default function Player() {
  const [subscribeKeys, getKeys] = useKeyboardControls();
  useFrame(() => {
    const keys = getKeys();
    console.log(keys);
  });
  return (
    <>
      <RigidBody
        canSleep={false}
        colliders="ball"
        restitution={0.2}
        friction={1}
        position={[0, 1, 0]}
      >
        <mesh castShadow>
          <icosahedronGeometry args={[0.3, 1]} />
          <meshStandardMaterial flatShading color="mediumpurple" />
        </mesh>
      </RigidBody>
    </>
  );
}
