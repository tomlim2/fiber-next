"use client";
import { shaderMap } from "./shader/shaderMap";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const MeshForShader: React.FC = () => {
  const meshRef = useRef() as any;
  const materialRef = useRef() as any;
  const planeDimention = {width: 6, height: 6}

  useFrame((state, delta) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  return (
    <>
      <mesh ref={meshRef}>
        <planeGeometry args={[planeDimention.width, planeDimention.height]} />
        <shaderMaterial
          ref={materialRef}
          uniforms={{
            uTime: { value: 0 },
            uWidth: { value: planeDimention.width },
            uHeight: { value: planeDimention.height },
          }}
          fragmentShader={shaderMap[0].fragment}
          vertexShader={shaderMap[0].vertex}
        />
      </mesh>
    </>
  );
};

export default MeshForShader;
