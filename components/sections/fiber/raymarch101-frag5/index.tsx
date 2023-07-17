"use client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";

const SectionRaymarch101F5 = () => {
  return (
    <Canvas shadows camera={{ position: [0, 0, 3] }}>
      <Experience />
    </Canvas>
  );
};

export default SectionRaymarch101F5;
