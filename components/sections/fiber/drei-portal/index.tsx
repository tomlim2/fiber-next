"use client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";

const SectionDreiPortal = () => {
  return (
    <Canvas shadows camera={{ position: [-3, 0.5, 3] }}>
      <Experience />
    </Canvas>
  );
};

export default SectionDreiPortal;
