import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect } from "react";
import { useControls } from "leva";
export default function Cube() {
  const cube = useGLTF("/assets/models/glb_cube_01.glb");
  const animations = useAnimations(cube.animations, cube.scene) as any;
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
      object={cube.scene}
      scale={1}
      position={[0, -1, 0]}
      rotation-y={0.3}
    />
  );
}
