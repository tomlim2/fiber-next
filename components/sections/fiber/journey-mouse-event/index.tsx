"use client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";

const SectionJourneyStage = () => {
  return (
    <Canvas
      camera={{
        fov: 45,
        near: 0.1,
        far: 50,
        position: [-4, 3, 6],
      }}
      shadows
    >
      <Experience />
    </Canvas>
  );
};

export default SectionJourneyStage;
