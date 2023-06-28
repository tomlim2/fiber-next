import { useFrame } from "@react-three/fiber";
import {
  Stage,
  useHelper,
  OrbitControls,
  ContactShadows,
  Environment,
} from "@react-three/drei";
import { Suspense, useRef } from "react";
import { Perf } from "r3f-perf";
import * as THREE from "three";
import { useControls } from "leva";
import Hamburger from "./Hamburger";
import Halmet from "./Halmet";
import Fox from "./Fox";

const Experience = () => {
  const cube = useRef() as any;
  const directionalLight = useRef() as any;
  useHelper(directionalLight, THREE.DirectionalLightHelper, 1);
  const { color, opacity, blur } = useControls("contact shadows", {
    color: "#1d8f75",
    opacity: { value: 0.4, min: 0, max: 1 },
    blur: { value: 2.8, min: 0, max: 10 },
  });

  return (
    <>
      <Perf position="bottom-right" />

      <OrbitControls makeDefault />

      {/* <directionalLight
        castShadow
        position={[1, 2, 3]}
        intensity={1.5}
        shadow-normalBias={0.04}
      />
      <ambientLight intensity={0.5} /> */}
      
      <Environment
        background
        blur={0.1}
        // files={[
        //   "/assets/images/environmentMaps/0/px.jpg",
        //   "/assets/images/environmentMaps/0/nx.jpg",
        //   "/assets/images/environmentMaps/0/py.jpg",
        //   "/assets/images/environmentMaps/0/ny.jpg",
        //   "/assets/images/environmentMaps/0/pz.jpg",
        //   "/assets/images/environmentMaps/0/nz.jpg",
        // ]}
        files="/assets/images/environmentMaps/4/2k.hdr"
      ></Environment>
      <Suspense
        fallback={
          <mesh position-y={0.5} scale={[2, 3, 2]}>
            <boxGeometry args={[1, 1, 1, 2, 2, 2]} />
            <meshBasicMaterial wireframe color="red" />
          </mesh>
        }
      >
        {/* <Hamburger scale={0.35} /> */}
        <ContactShadows
          position={[0, -0.99, 0]}
          scale={10}
          resolution={512}
          far={5}
          color={color}
          opacity={opacity}
          blur={blur}
          frames={1}
        />
        <Fox />
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
