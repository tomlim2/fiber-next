import { useFrame } from "@react-three/fiber";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { useRef, useMemo, useState, JSXElementConstructor } from "react";
import { BoxGeometry, Euler, MeshStandardMaterial, Quaternion } from "three";
import { useGLTF } from "@react-three/drei";

const boxGeometry = new BoxGeometry(1, 1, 1);
const floor1Material = new MeshStandardMaterial({ color: "limegreen" });
const floor2Material = new MeshStandardMaterial({ color: "greenyellow" });
const obstacleMaterial = new MeshStandardMaterial({ color: "orangered" });
const wallMaterial = new MeshStandardMaterial({ color: "slategrey" });

interface PropsBlock {
  position: [number, number, number];
}

export function BlockStart({ position = [0, 0, 0] }: PropsBlock) {
  return (
    <group position={position}>
      <mesh
        geometry={boxGeometry}
        material={floor1Material}
        position={[0, -0.1, 0]}
        scale={[4, 0.2, 4]}
        receiveShadow
      />
    </group>
  );
}

export function BlockEnd({ position = [0, 0, 0] }: PropsBlock) {
  const hamburger = useGLTF("/assets/models/hamburger.glb") as any;
  hamburger.scene.children.forEach((mesh: any) => {
    mesh.castShadow = true;
  });
  return (
    <group position={position}>
      <mesh
        geometry={boxGeometry}
        material={floor1Material}
        position={[0, 0, 0]}
        scale={[4, 0.2, 4]}
        receiveShadow
      />

      <RigidBody
        type="fixed"
        colliders="hull"
        position={[0, 0.25, 0]}
        restitution={0.2}
        friction={0}
      >
        <primitive object={hamburger.scene} scale={0.2} />
      </RigidBody>
    </group>
  );
}

export function BlockSpinner({ position = [0, 0, 0] }: PropsBlock) {
  const obstacle = useRef() as any;
  const [speed] = useState(
    () => (Math.random() + 0.2) * (Math.random() < 0.5 ? -1 : 1)
  );
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    console.log(time);
    const rotation = new Quaternion();
    rotation.setFromEuler(new Euler(0, time * speed, 0));
    obstacle.current.setNextKinematicRotation(rotation);
  });
  return (
    <group position={position}>
      <mesh
        geometry={boxGeometry}
        material={floor2Material}
        position={[0, -0.1, 0]}
        scale={[4, 0.2, 4]}
        receiveShadow
      />
      <RigidBody
        ref={obstacle}
        type="kinematicPosition"
        position={[0, 0.3, 0]}
        restitution={0.2}
        friction={0}
      >
        <mesh
          geometry={boxGeometry}
          material={obstacleMaterial}
          scale={[3.5, 0.3, 0.3]}
        />
      </RigidBody>
    </group>
  );
}

export function BlockLimbo({ position = [0, 0, 0] }: PropsBlock) {
  const obstacle = useRef() as any;
  const [timeOffset] = useState(() => Math.random() * Math.PI * 2);
  const [speed] = useState(
    () => (Math.random() + 0.2) * (Math.random() < 0.5 ? -1 : 1)
  );

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    const y = Math.sin(time + timeOffset) + 1.15;
    obstacle.current.setNextKinematicTranslation({
      x: position[0],
      y: position[1] + y,
      z: position[2],
    });
  });

  return (
    <group position={position}>
      <mesh
        geometry={boxGeometry}
        material={floor2Material}
        position={[0, -0.1, 0]}
        scale={[4, 0.2, 4]}
        receiveShadow
      />
      <RigidBody
        ref={obstacle}
        type="kinematicPosition"
        position={[0, 0.3, 0]}
        restitution={0.2}
        friction={0}
      >
        <mesh
          geometry={boxGeometry}
          material={obstacleMaterial}
          scale={[3.5, 0.3, 0.3]}
          castShadow
          receiveShadow
        />
      </RigidBody>
    </group>
  );
}

export function BlockAxe({ position = [0, 0, 0] }: PropsBlock) {
  const obstacle = useRef() as any;
  const [timeOffset] = useState(() => Math.random() * Math.PI * 2);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    const x = Math.sin(time + timeOffset) * 1.25;
    obstacle.current.setNextKinematicTranslation({
      x: position[0] + x,
      y: position[1] + 0.75,
      z: position[2],
    });
  });

  return (
    <group position={position}>
      <mesh
        geometry={boxGeometry}
        material={floor2Material}
        position={[0, -0.1, 0]}
        scale={[4, 0.2, 4]}
        receiveShadow
      />
      <RigidBody
        ref={obstacle}
        type="kinematicPosition"
        position={[0, 0.3, 0]}
        restitution={0.2}
        friction={0}
      >
        <mesh
          geometry={boxGeometry}
          material={obstacleMaterial}
          scale={[1.5, 1.5, 0.3]}
          castShadow
          receiveShadow
        />
      </RigidBody>
    </group>
  );
}

function Bounds({ length = 1 }) {
  return (
    <>
      <RigidBody type="fixed" restitution={0.2} friction={0}>
        <mesh
          position={[2.15, 0.75, -(length * 2) + 2]}
          geometry={boxGeometry}
          material={wallMaterial}
          scale={[0.3, 1.5, 4 * length]}
          castShadow
        />
        <mesh
          position={[-2.15, 0.75, -(length * 2) + 2]}
          geometry={boxGeometry}
          material={wallMaterial}
          scale={[0.3, 1.5, 4 * length]}
          receiveShadow
        />
        <mesh
          position={[0, 0.75, -(length * 4) + 2]}
          geometry={boxGeometry}
          material={wallMaterial}
          scale={[4, 1.5, 0.3]}
          receiveShadow
        />
        <CuboidCollider
          args={[2, 0.1, 2 * length]}
          position={[0, -0.1, -(length * 2) + 2]}
          restitution={0.2}
          friction={1}
        />
      </RigidBody>
    </>
  );
}

export function Level({
  count = 5,
  types = [BlockSpinner, BlockAxe, BlockLimbo],
}) {
  const blocks = useMemo(() => {
    const blocks: any = [];

    for (let i = 0; i < count; i++) {
      const type = types[Math.floor(Math.random() * types.length)];
      blocks.push(type);
    }

    return blocks;
  }, [count, types]);
  return (
    <>
      <BlockStart position={[0, 0, 0]} />

      {blocks.map((Block: JSXElementConstructor<PropsBlock>, index: any) => (
        <Block key={index} position={[0, 0, -(index + 1) * 4]} />
      ))}

      <BlockEnd position={[0, 0, -(count + 1) * 4]} />
      <Bounds length={count + 2} />
    </>
  );
}