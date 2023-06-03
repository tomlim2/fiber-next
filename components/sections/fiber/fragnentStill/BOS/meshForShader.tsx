'use client';

import type { IUniform, Vector2 } from "three";
import type { IShaderSet, IFVector2 } from "@/types/fiber";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

interface Props {
  shader: IShaderSet;
  mousePos: IFVector2 | undefined;
}

const MeshForShader: React.FC<Props> = ({ shader, mousePos }) => {
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
          fragmentShader={shader.fragment}
          vertexShader={shader.vertex}
        />
      </mesh>
    </>
  );
};

export default MeshForShader;
