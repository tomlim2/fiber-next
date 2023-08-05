// "use client";
import { useGLTF, OrbitControls, Environment } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { useRef, useEffect, useState, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import {
  Mesh,
  BufferGeometry,
  SphereGeometry,
  Material,
  BufferAttribute,
  Shader,
  ShaderMaterial,
  ShaderMaterialParameters,
  MeshStandardMaterial,
} from "three";
import { useControls } from "leva";

const Experience = () => {
  const meshRef = useRef<Mesh<BufferGeometry, Material | Material[]>>(null);
  const { nodes } = useGLTF("/assets/models/aobox-transformed.glb") as any;
  const materialRef = useRef<MeshStandardMaterial>(null);

  useEffect(() => {});

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

  const sphereGeometry = new SphereGeometry(1, 32, 32);
  const nonIndexedGeometry = sphereGeometry.toNonIndexed();

  const customUniforms = {
    uTime: {
      mixed: true,
      linked: true,
      value: 0,
    },
    uProgress: {
      value: 0,
    },
  };

  const onUpdateMaterial = (shader: Shader) => {
    shader.uniforms.uTime = customUniforms.uTime;
    shader.uniforms.uProgress = customUniforms.uProgress;
    shader.vertexShader = shader.vertexShader.replace(
      "#include <common>",
      `
        #include <common>
        uniform float uTime;
        uniform float uProgress;
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

        transformed += uProgress*uARandom*(0.5*sin(uTime)+0.5)*normal;
      `
    );
  };

  useFrame((state, delta) => {
    if (meshRef?.current?.material) {
      customUniforms.uTime.value += delta;
    }
  });

  const shaderMaterial = useMemo(() => {
    const material = new ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
      },
      // ... other material properties
    });
    onUpdateMaterial(material); // Call the onUpdateMaterial function to set up the shader
    return material;
  }, []);

  return (
    <>
      <Perf position="bottom-right" />
      <OrbitControls makeDefault />
      <Environment
        background
        files="/assets/images/environmentMaps/blender/blender_2.hdr"
      ></Environment>
      <group>
        <mesh ref={meshRef} material={shaderMaterial}>
          <bufferGeometry
            {...nonIndexedGeometry}
            onUpdate={(geometry: BufferGeometry) => {
              onUpdateGeo(geometry);
            }}
          />
          <meshStandardMaterial
            ref={materialRef}
            onBeforeCompile={(shader) => onUpdateMaterial(shader)}
          />
        </mesh>
      </group>
    </>
  );
};

export default Experience;
