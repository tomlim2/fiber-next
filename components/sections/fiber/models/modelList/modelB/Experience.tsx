import {
  Environment,
  useHelper,
  OrbitControls,
  ContactShadows,
} from "@react-three/drei";
import { Mesh, BufferGeometry, Material, ShaderMaterial, Color } from "three";
import { Suspense, useRef } from "react";
import Cube from "./Cube";
import { useControls } from "leva";

const Experience: React.FC = () => {
  const meshRef = useRef<Mesh<BufferGeometry, Material | Material[]>>(null);
  const materialRef = useRef<ShaderMaterial>(null);
  const { color, opacity, blur } = useControls("contact shadows", {
    color: "#1d8f75",
    opacity: { value: 0, min: 0, max: 1 },
    blur: { value: 2.8, min: 0, max: 10 },
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
        materialRef.current.uniforms.uMouseX.value = event.uv.x;
        materialRef.current.uniforms.uMouseY.value = event.uv.y;
      }
    }
  };

  return (
    <>
      <OrbitControls makeDefault />
      <Environment
        background
        files="/assets/images/environmentMaps/blender/blender_2.hdr"
      ></Environment>
      <group>
        <Suspense
          fallback={
            <mesh position-y={0.5} scale={[2, 3, 2]}>
              <boxGeometry args={[1, 1, 1, 2, 2, 2]} />
              <meshBasicMaterial wireframe color="red" />
            </mesh>
          }
        >
          {/* <Hamburger scale={0.35} /> */}
          <ContactShadows
            position={[0, -0.99, 0]}
            scale={10}
            resolution={512}
            far={5}
            color={color}
            opacity={opacity}
            blur={blur}
            frames={1}
          />
          {/* <Fox /> */}
          <Cube />
        </Suspense>
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
          <meshStandardMaterial color="orange" />
        </mesh>
      </group>
    </>
  );
};

export default Experience;
