import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect } from "react";
import { useControls } from "leva";

export default function Fox() {
  const emoji = useGLTF("/assets/models/emojis/emoji01.glb");

  return (
    <primitive
      object={emoji.scene}
      scale={1}
      position={[0, .2, 0]}
      rotation-y={0.3}
    />
  );
}
