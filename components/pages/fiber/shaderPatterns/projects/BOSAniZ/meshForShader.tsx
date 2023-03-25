import { shaderMap } from "./shader/shaderMap";
import type { Mesh, BufferGeometry, Material, ShaderMaterial } from "three"
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const MeshForShader: React.FC = () => {
  const meshRef = useRef<Mesh<BufferGeometry, Material | Material[]>>(null);
  const materialRef = useRef<ShaderMaterial>(null);
  const planeDimention = { width: 6, height: 6 }

  useFrame((state, delta) => {
    if (materialRef && materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  const eventHandler = () => {
    console.log("the event occured")
  }

  return (
    <>
      <mesh ref={meshRef} onClick={eventHandler}>
        <planeGeometry args={[planeDimention.width, planeDimention.height]} />
        <shaderMaterial
          ref={materialRef}
          uniforms={{
            uTime: { value: 0 },
            uWidth: { value: planeDimention.width },
            uHeight: { value: planeDimention.height },
            mouseX: { value: 0 },
            mouseY: { value: 0 },
          }}
          fragmentShader={shaderMap[0].fragment}
          vertexShader={shaderMap[0].vertex}
        />
      </mesh>
    </>
  );
};

export default MeshForShader;
