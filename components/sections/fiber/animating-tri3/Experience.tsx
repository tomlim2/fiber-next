// "use client";
import {
  useGLTF,
  Edges,
  MeshPortalMaterial,
  OrbitControls,
  Environment,
  PivotControls,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import { useRef, useEffect, useState, useMemo } from "react";
import { useFrame, extend } from "@react-three/fiber";
import {
  Mesh,
  BufferGeometry,
  SphereGeometry,
  Material,
  ShaderMaterial,
  MeshBasicMaterial,
  Color,
  BufferAttribute,
  DoubleSide,
  MeshStandardMaterial,
  MeshPhongMaterial,
  MeshPhysicalMaterial,
} from "three";
import CustomShaderMaterial from "three-custom-shader-material";
import CustomShaderMaterialType from "three-custom-shader-material/vanilla";
import { useControls } from "leva";
import { shaders } from "./shader";

const Experience = () => {
  const meshRef = useRef<Mesh<BufferGeometry, Material | Material[]>>(null);
  const { nodes } = useGLTF("/assets/models/aobox-transformed.glb") as any;
  const materialRef = useRef<CustomShaderMaterialType>(null);
  const planeDimention = { width: 3, height: 3 };
  const sphereDimention = [1, 32, 32];

  const intiValue = {
    timeSpeedCtrl: 1,
    paramsACtrl: 0.05,
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

  useFrame((state) => {
    if (materialRef?.current) {
      materialRef.current.uniforms.uTime.value = -state.clock.elapsedTime / 5;
    }
  });

  const sphereGeometry = new SphereGeometry(1, 32, 32);
  const nonIndexedGeometry = sphereGeometry.toNonIndexed();

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
        <mesh ref={meshRef}>
          <bufferGeometry
            {...nonIndexedGeometry}
            onUpdate={(geometry: BufferGeometry) => {
              onUpdateGeo(geometry);
            }}
          />
          <CustomShaderMaterial
            baseMaterial={MeshStandardMaterial}
            ref={materialRef}
            color={0x68c3c0}
            roughness={0.2}
            metalness={0.1}
            flatShading={true}
            // fragmentShader={shaders[0].fragment}
            vertexShader={shaders[0].vertex}
            uniforms={{
              uTime: { value: 0 },
              uWidth: { value: planeDimention.width },
              uHeight: { value: planeDimention.height },
              uMouseX: { value: 0 },
              uMouseY: { value: 0 },
              uParamsA: { value: 12 },
              uColorA: { value: new Color("#1d79a0") },
              uColorB: { value: new Color("#ffffff") },
            }}
            
          />
        </mesh>
      </group>
    </>
  );
};

export default Experience;
