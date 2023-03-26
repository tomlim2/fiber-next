import { shaderMap } from "./shader/shaderMap";
import type { Mesh, BufferGeometry, Material, ShaderMaterial } from "three";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const MeshForShader: React.FC = () => {
  const meshRef = useRef<Mesh<BufferGeometry, Material | Material[]>>(null);
  const materialRef = useRef<ShaderMaterial>(null);
  const planeDimention = { width: 6, height: 6 };

  useFrame((state, delta) => {
    if (materialRef && materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  const eventHandler = (event: any, eventType: string) => {
    console.log(eventType);
    console.log('uv', event.uv) // UV coordinates on the geometry (in 2D)
    if (eventType == "onPointerEnter") {
      document.body.style.cursor = "pointer";
    }
    if (eventType == "onPointerLeave") {
      document.body.style.cursor = "default";
    }
  };

  return (
    <>
      <mesh
        ref={meshRef}
        onClick={(event) => eventHandler(event, "onClick")}
        onContextMenu={(event) => eventHandler(event, "onRightClick")}
        onDoubleClick={(event) => eventHandler(event, "onDoubleClick")}
        onPointerUp={(event) => eventHandler(event, "onPointerUp")}
        onPointerDown={(event) => eventHandler(event, "onPointerDown")}
        onPointerOver={(event) => eventHandler(event, "onPointerOver")}
        onPointerEnter={(event) => eventHandler(event, "onPointerEnter")}
        onPointerOut={(event) => eventHandler(event, "onPointerOut")}
        onPointerLeave={(event) => eventHandler(event, "onPointerLeave")}
      >
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
