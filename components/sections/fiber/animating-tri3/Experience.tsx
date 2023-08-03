// "use client";
import {
  useGLTF,
  Edges,
  MeshPortalMaterial,
  OrbitControls,
  Environment,
  PivotControls,
} from "@react-three/drei";
import { Debug, RigidBody, Physics, CuboidCollider } from "@react-three/rapier";
import { Perf } from "r3f-perf";
import { useRef, useEffect, useState, useMemo } from "react";
import { useFrame, extend } from "@react-three/fiber";
import {
  Mesh,
  BufferGeometry,
  SphereGeometry,
  Material,
  ShaderMaterial,
  Color,
  BufferAttribute,
  DoubleSide,
  MeshStandardMaterial,
} from "three";
import { useControls } from "leva";
import { shaders } from "./shader";


const Experience = () => {
  const meshRef = useRef<Mesh<BufferGeometry, Material | Material[]>>(null);
  const { nodes } = useGLTF("/assets/models/aobox-transformed.glb") as any;
  const materialRef = useRef<ShaderMaterial>(null);
  const planeDimention = { width: 3, height: 3 };
  const sphereDimention = [1, 32, 32];

  const intiValue = {
    timeSpeedCtrl: 1,
    paramsACtrl: 0.05,
    paramsBCtrl: 0,
    paramsCCtrl: 1,
    paramsDCtrl: 0,
    colorACtrl: "#020202",
    colorBCtrl: "#fffce9",
  };

  const timeSpeed = useRef(intiValue.timeSpeedCtrl);

  const [_, set] = useControls(() => ({
    colorACtrl: {
      value: intiValue.colorACtrl,
      onChange: (value) => {
        if (materialRef && materialRef.current) {
          materialRef.current.uniforms.uColorA.value = new Color(value);
        }
      },
    },
    colorBCtrl: {
      value: intiValue.colorBCtrl,
      onChange: (value) => {
        if (materialRef && materialRef.current) {
          materialRef.current.uniforms.uColorB.value = new Color(value);
        }
      },
    },
    paramsACtrl: {
      value: intiValue.paramsACtrl,
      step: 0.01,
      min: -1,
      max: 1,
      onChange: (value) => {
        if (materialRef && materialRef.current) {
          materialRef.current.uniforms.uParamsA.value = value;
        }
      },
    },
    paramsBCtrl: {
      value: intiValue.paramsBCtrl,
      step: 0.1,
      min: -1,
      max: 1,
      onChange: (value) => {
        if (materialRef && materialRef.current) {
          materialRef.current.uniforms.uParamsB.value = value;
        }
      },
    },
    paramsCCtrl: {
      value: intiValue.paramsCCtrl,
      step: 0.001,
      min: -10,
      max: 10,
      onChange: (value) => {
        if (materialRef && materialRef.current) {
          materialRef.current.uniforms.uParamsC.value = value;
        }
      },
    },
    paramsDCtrl: {
      value: intiValue.paramsDCtrl,
      step: 0.1,
      min: -10,
      max: 10,
      onChange: (value) => {
        if (materialRef && materialRef.current) {
          materialRef.current.uniforms.uParamsD.value = value;
        }
      },
    },
    timeSpeedCtrl: {
      value: intiValue.timeSpeedCtrl,
      step: 0.1,
      min: 1,
      max: 10,
      onChange: (value) => {
        timeSpeed.current = value;
      },
    },
  }));

  useEffect(() => {
    set(intiValue);

    // Set the custom attribute on the mesh's geometry
  });

  const onUpdateGeo = (geometrys: BufferGeometry) => {
    if (geometrys) {
      const geometry = geometrys;
      if (geometry) {
        let len = geometry.attributes.position.count;

        let randoms = new Float32Array(len);
        for (let i = 0; i < len; i += 3) {
          let r = Math.random();
          randoms[i] = r;
          randoms[i + 1] = r;
          randoms[i + 2] = r;
        }

        const customAttributeArray = randoms;
        const customAttribute = new BufferAttribute(customAttributeArray, 1);

        geometry.setAttribute("uARandom", customAttribute);
      }
    }
  };

  useFrame((state, delta) => {
    if (materialRef && materialRef.current) {
      materialRef.current.uniforms.uTime.value += delta * timeSpeed.current;
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

      if (materialRef && materialRef.current) {
        materialRef.current.uniforms.uMouseX.value = event.uv.x;
        materialRef.current.uniforms.uMouseY.value = event.uv.y;
      }
    }
  };
  const sphereGeometry = new SphereGeometry(1, 32, 32);
  const nonIndexedGeometry = sphereGeometry.toNonIndexed();
  // const extendMaterials = new extendMaterial();
  
  return (
    <>
      <Perf position="bottom-right" />
      <OrbitControls makeDefault />
      <Environment
        background
        files={[
          "/assets/images/environmentMaps/2/px.jpg",
          "/assets/images/environmentMaps/2/nx.jpg",
          "/assets/images/environmentMaps/2/py.jpg",
          "/assets/images/environmentMaps/2/ny.jpg",
          "/assets/images/environmentMaps/2/pz.jpg",
          "/assets/images/environmentMaps/2/nz.jpg",
        ]}
      ></Environment>
      <group>
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
          <bufferGeometry
            {...nonIndexedGeometry}
            onUpdate={(geometry: BufferGeometry) => {
              onUpdateGeo(geometry);
            }}
          />
          <shaderMaterial
            {...extendMaterial}
            ref={materialRef}
            uniforms={{
              uTime: { value: 0 },
              uWidth: { value: planeDimention.width },
              uHeight: { value: planeDimention.height },
              uMouseX: { value: 0 },
              uMouseY: { value: 0 },
              uParamsA: { value: 12 },
              uParamsB: { value: 1 },
              uParamsC: { value: 0.02 },
              uParamsD: { value: 1 },
              uColorA: { value: new Color("#1d79a0") },
              uColorB: { value: new Color("#ffffff") },
            }}
            fragmentShader={shaders[0].fragment}
            vertexShader={shaders[0].vertex}
          />
        </mesh>
      </group>
    </>
  );
};

export default Experience;
