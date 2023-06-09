import { shaderMap } from "@/components/sections/fiber/fragnent-time/patterns/BOSAniA/shader/shaderMap";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const MeshForShader: React.FC = () => {
  const meshRef = useRef() as any;
  const materialRef = useRef() as any;

  useFrame((state, delta) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
      // console.log(materialRef.current.uniforms.uTime.value, "hi");
    }
  });

  return (
    <>
      <mesh ref={meshRef}>
        <planeGeometry args={[6, 6]} />
        <shaderMaterial
          ref={materialRef}
          uniforms={{ uTime: { value: 0 } }}
          fragmentShader={shaderMap[0].fragment}
          vertexShader={shaderMap[0].vertex}
        />
      </mesh>
    </>
  );
};

export default MeshForShader;
