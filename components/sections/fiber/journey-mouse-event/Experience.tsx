// "use client";
import { useFrame } from "@react-three/fiber";
import { Stage, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { Perf } from "r3f-perf";
import { useControls } from "leva";
// import Drunk from "./postprocess/Drunk";
import { EffectComposer, Vignette } from "@react-three/postprocessing";

const Experience = () => {
  const cube = useRef() as any;
  const directionalLight = useRef() as any;
  // const drunkRef = useRef() as any;

  // console.log(Drunk);

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

  const eventHandler = () => {
    cube.current.material.color.set(`hsl(${Math.random() * 360}, 100%, 75%)`);
  };

  return (
    <>
      {/* <EffectComposer>
      <Drunk />
      </EffectComposer> */}
        {/* <Vignette eskil={false} offset={0.1} darkness={1.1} /> */}

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

        <mesh
          ref={cube}
          position-y={1}
          position-x={2}
          scale={1.5}
          onClick={eventHandler}
        >
          <boxGeometry />
          <meshStandardMaterial color="mediumpurple" />
        </mesh>
      </Stage>
    </>
  );
};

export default Experience;
