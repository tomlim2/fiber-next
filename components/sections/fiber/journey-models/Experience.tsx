import { useFrame } from "@react-three/fiber";
import {
  Stage,
  useHelper,
  OrbitControls,
} from "@react-three/drei";
import { Suspense, useRef } from "react";
import { Perf } from "r3f-perf";
import * as THREE from "three";
import { useControls } from "leva";
import Model from "./Halmet";
import DreiModel from "./Hamburger";

const Experience = () => {
  const cube = useRef() as any;
  const directionalLight = useRef() as any;
  useHelper(directionalLight, THREE.DirectionalLightHelper, 1);

  return (
    <>
      <Perf position="bottom-right" />

      <OrbitControls makeDefault />

      <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <Suspense
        fallback={
          <mesh position-y={0.5} scale={[2, 3, 2]}>
            <boxGeometry args={[1, 1, 1, 2, 2, 2]} />
            <meshBasicMaterial wireframe color="red" />
          </mesh>
        }
      >
        <DreiModel />
      </Suspense>

      <mesh
        receiveShadow
        position-y={-1}
        rotation-x={-Math.PI * 0.5}
        scale={10}
      >
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </>
  );
};

export default Experience;
