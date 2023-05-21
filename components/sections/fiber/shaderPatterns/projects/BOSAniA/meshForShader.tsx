import { shaderMap } from "@/components/sections/fiber/shaderPatterns/projects/BOSAniA/shader/shaderMap";
import { IUniform } from "three";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

interface Props {}

interface Uniforms {
  [uniform: string]: IUniform<number>;
}

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
