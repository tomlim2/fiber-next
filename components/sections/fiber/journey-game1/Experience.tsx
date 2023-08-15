import { useFrame } from "@react-three/fiber";
import Level from "./Level";
import Lights from "./Lights";
import { Physics } from "@react-three/rapier";
import {
  Sky,
  AccumulativeShadows,
  Lightformer,
  useHelper,
  OrbitControls,
  ContactShadows,
  Environment,
} from "@react-three/drei";
import { useRef } from "react";
import { Perf } from "r3f-perf";
import * as THREE from "three";
import { useControls } from "leva";
import { Cube } from "./mesh/cube";

const Experience = () => {
  const cube = useRef() as any;
  const directionalLight = useRef() as any;
  useHelper(directionalLight, THREE.DirectionalLightHelper, 1);

  const { color, opacity, blur } = useControls("contact shadows", {
    color: "#1d8f75",
    opacity: { value: 0.4, min: 0, max: 1 },
    blur: { value: 2.8, min: 0, max: 10 },
  });
  const { sunPosition } = useControls("sky", {
    sunPosition: { value: [1, 2, 3] },
  });
  const { envMapIntensity, envMapHeight, envMapRadius, envMapScale } =
    useControls("environment map", {
      envMapIntensity: { value: 7, min: 0, max: 12 },
      envMapHeight: { value: 7, min: 0, max: 100 },
      envMapRadius: { value: 28, min: 10, max: 1000 },
      envMapScale: { value: 100, min: 10, max: 1000 },
    });

  useFrame((state, delta) => {
    // cube.current.rotation.y += delta * 0.2;
  });

  return (
    <>
      <Perf position="bottom-right" />

      <OrbitControls makeDefault />
      <Physics>
        <Lights />
        <Level />
      </Physics>
    </>
  );
};

export default Experience;
