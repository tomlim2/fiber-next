import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect } from "react";
import { useControls } from "leva";
export default function Fox() {
  const fox = useGLTF("/assets/models/glb_cube_01.glb");
  const animations = useAnimations(fox.animations, fox.scene) as any;
  const { animationName } = useControls({
    animationName: { options: animations.names },
  });
  useEffect(() => {
    const action = animations.actions[animationName as any];
    action.reset().fadeIn(0.5).play();

    return () => {
      action.fadeOut(0.5);
    };
  }, [animationName]);

  return (
    <primitive
      object={fox.scene}
      scale={0.02}
      position={[0, -1, 0]}
      rotation-y={0.3}
    />
  );
}
