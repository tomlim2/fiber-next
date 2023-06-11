import { useGLTF } from "@react-three/drei";

export default function Hamburger() {
  const model = useGLTF("/assets/models/hamburger.glb");
  return <primitive object={model.scene} scale={0.35} />;
}

useGLTF.preload("/assets/models/hamburger.glb");
