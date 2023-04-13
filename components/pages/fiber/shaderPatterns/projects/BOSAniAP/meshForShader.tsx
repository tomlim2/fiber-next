import { shaderMap } from "./shader/shaderMap";
import type { Mesh, BufferGeometry, Material, ShaderMaterial } from "three";
import { useFrame } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react";
import { useControls } from "leva";

interface Props {
  ctloffsetX: number;
}

const MeshForShader: React.FC<Props> = ({ ctloffsetX }) => {
  const meshRef = useRef<Mesh<BufferGeometry, Material | Material[]>>(null);
  const materialRef = useRef<ShaderMaterial>(null);
  const planeDimention = { width: 6, height: 6 };

  const ctloffsetXRef = useRef(1);

  useControls({
    ctloffsetX: {
      value: ctloffsetXRef.current,
      step: 0.1,
      onChange: (value) => {
        ctloffsetXRef.current = value;
      },
    },
  });

  useFrame((state, delta) => {
    if (materialRef && materialRef.current) {
      materialRef.current.uniforms.uTime.value += delta*ctloffsetXRef.current;
    }
  });

  const eventHandler = (event: any, eventType: string) => {
    if (eventType == "onPointerEnter") {
      document.body.style.cursor = "pointer";
    }
    if (eventType == "onPointerLeave") {
      document.body.style.cursor = "default";
    }
    if (eventType == "onPointerMove") {
      document.body.style.cursor = "pointer";
      console.log("X", event.uv.x, "Y", event.uv.y); // UV coordinates on the geometry (in 2D)
      if (materialRef && materialRef.current) {
        materialRef.current.uniforms.mouseX.value = event.uv.x;
        materialRef.current.uniforms.mouseY.value = event.uv.y;
      }
    }
  };

  return (
    <>
      <group position-x={ctloffsetX}>
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
          onPointerMove={(event) => eventHandler(event, "onPointerMove")}
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
              offsetX: { value: 5 },
            }}
            fragmentShader={shaderMap[0].fragment}
            vertexShader={shaderMap[0].vertex}
          />
        </mesh>
      </group>
    </>
  );
};

export default MeshForShader;
