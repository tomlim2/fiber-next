import { useFrame } from "@react-three/fiber";
import {
  Stage,
  AccumulativeShadows,
  useHelper,
  OrbitControls,
  ContactShadows,
} from "@react-three/drei";
import { useRef } from "react";
import { Perf } from "r3f-perf";
import * as THREE from "three";
import { useControls } from "leva";

const Experience = () => {
  const cube = useRef() as any;
  const directionalLight = useRef() as any;
  useHelper(directionalLight, THREE.DirectionalLightHelper, 1);

  const { shadowColor, shadowOpacity, shadowBlur } = useControls(
    "contact shadows",
    {
      shadowColor: "#1d8f75",
      shadowOpacity: { value: 0.4, min: 0, max: 1 },
      shadowBlur: { value: 2.8, min: 0, max: 10 },
    }
  );

  const { stageIntensity } = useControls("stage", {
    stageIntensity: { value: 2, min: 0, max: 12 },
  });

  useFrame((state, delta) => {
    cube.current.rotation.y += delta * 0.2;
  });

  return (
    <>
      <Perf position="bottom-right" />

      <OrbitControls makeDefault />

      <Stage
        shadows={{
          type: "contact",
          opacity: shadowOpacity,
          blur: shadowBlur,
          color: shadowColor,
        }}
        environment="sunset"
        preset="portrait"
        intensity={stageIntensity}
      >
        <mesh position-y={1} position-x={-2}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>

        <mesh ref={cube} position-y={1} position-x={2} scale={1.5}>
          <boxGeometry />
          <meshStandardMaterial color="mediumpurple" />
        </mesh>
      </Stage>
    </>
  );
};

export default Experience;
