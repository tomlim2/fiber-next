"use client";
import { Canvas } from "@react-three/fiber";
import { KeyboardControls } from "@react-three/drei";
import Experience from "./Experience";
import Interface from "./interface";

const SectionRaymarch101F1 = () => {
  return (
    <KeyboardControls
      map={[
        { name: "forward", keys: ["ArrowUp", "KeyW"] },
        { name: "backward", keys: ["ArrowDown", "KeyS"] },
        { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
        { name: "rightward", keys: ["ArrowRight", "KeyD"] },
        { name: "jump", keys: ["Space"] },
      ]}
    >
      <Canvas shadows camera={{ position: [0, 0, 3] }}>
        <Experience />
      </Canvas>
      <Interface />
    </KeyboardControls>
  );
};

export default SectionRaymarch101F1;
