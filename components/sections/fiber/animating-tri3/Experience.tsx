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
  MeshBasicMaterial,
  Color,
  BufferAttribute,
  DoubleSide,
  MeshStandardMaterial,
  MeshPhongMaterial,
  MeshPhysicalMaterial,
} from "three";
import { useControls } from "leva";
import { shaders } from "./shader";

const Experience = () => {
  const meshRef = useRef<Mesh<BufferGeometry, Material | Material[]>>(null);
  const { nodes } = useGLTF("/assets/models/aobox-transformed.glb") as any;
  const materialRef = useRef<any>(null);
  const planeDimention = { width: 3, height: 3 };
  const sphereDimention = [1, 32, 32];

  useEffect(() => {
    // console.log(materialRef?.current);
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
    // if (materialRef?.current) {
    //   materialRef.current.uniforms.uTime.value = -state.clock.elapsedTime / 5;
    // }
  });

  const sphereGeometry = new SphereGeometry(1, 32, 32);
  const nonIndexedGeometry = sphereGeometry.toNonIndexed();

  const updateMaterial = (shader: any) => {
    shader.vertexShader = shader.vertexShader.replace(
      "#include <common>",
      `
        #include <common>
        uniform float uTime;
        attribute float uARandom;
        mat2 get2dRotateMatrix(float _angle)
        {
            return mat2(cos(_angle), - sin(_angle), sin(_angle), cos(_angle));
        }
      `
    );
    shader.vertexShader = shader.vertexShader.replace(
      "#include <begin_vertex>",
      `
        #include <begin_vertex>

        transformed += uARandom * normal;
      `
    );
  };

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
          <meshStandardMaterial
            ref={materialRef}
            onBeforeCompile={(shader) => updateMaterial(shader)}
          />
        </mesh>
      </group>
    </>
  );
};

export default Experience;
