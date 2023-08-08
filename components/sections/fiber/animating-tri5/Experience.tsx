// "use client";
import { useGLTF, OrbitControls, Environment } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { useRef, useEffect, useMemo } from "react";
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
  Color,
  DoubleSide,
  Vector3,
  IcosahedronGeometry,
  PlaneGeometry,
} from "three";
import { shaders } from "./shader/index";
import { useControls } from "leva";

const Experience = () => {
  const fox = useGLTF("/assets/models/Fox/glTF/Fox.gltf") as any;
  const meshRef = useRef<Mesh<BufferGeometry, Material | Material[]>>(null);
  const materialRef = useRef<MeshStandardMaterial>(null);
  interface IIntiValue {
    progress: number;
    timeSpeed: number;
  }
  const intiValue: IIntiValue = {
    progress: 0,
    timeSpeed: 1,
  };

  const [_, set] = useControls(() => ({
    progress: {
      value: intiValue.progress,
      step: 0.01,
      min: 0,
      max: 1,
      onChange: (value) => {
        if (materialRef && materialRef.current) {
          customUniforms.uProgress.value = value;
        }
      },
    },
    timeSpeed: {
      value: intiValue.timeSpeed,
      step: 0.1,
      min: 1,
      max: 10,
      onChange: (value) => {
        customUniforms.uTime.value = value;
      },
    },
  }));

  useEffect(() => {
    set(intiValue);
  });

  // const sphereGeometry = new SphereGeometry(1, 16, 16);
  const sphereGeometry = new IcosahedronGeometry(1, 6);
  // const sphereGeometry = new PlaneGeometry(1, 1, 1, 1);
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
      shaders[0].common
    );
    shader.vertexShader = shader.vertexShader.replace(
      "#include <begin_vertex>",
      shaders[0].vertex
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

  const onUpdateGeo = (geometrys: BufferGeometry) => {
    if (geometrys) {
      const geometry = geometrys;
      if (geometry) {
        let len = geometry.attributes.position.count;

        let randoms = new Float32Array(len);
        let centers = new Float32Array(len * 3);

        for (let i = 0; i < len; i += 3) {
          let r = Math.random();
          randoms[i] = r;
          randoms[i + 1] = r;
          randoms[i + 2] = r;

          let x = geometry.attributes.position.array[i * 3];
          let y = geometry.attributes.position.array[i * 3 + 1];
          let z = geometry.attributes.position.array[i * 3 + 2];

          let x1 = geometry.attributes.position.array[i * 3 + 3];
          let y1 = geometry.attributes.position.array[i * 3 + 4];
          let z1 = geometry.attributes.position.array[i * 3 + 5];

          let x2 = geometry.attributes.position.array[i * 3 + 6];
          let y2 = geometry.attributes.position.array[i * 3 + 7];
          let z2 = geometry.attributes.position.array[i * 3 + 8];

          let center = new Vector3(x, y, z)
            .add(new Vector3(x1, y1, z1).add(new Vector3(x2, y2, z2)))
            .divideScalar(3);

          centers.set([center.x, center.y, center.z], i * 3);
          centers.set([center.x, center.y, center.z], (i + 1) * 3);
          centers.set([center.x, center.y, center.z], (i + 2) * 3);
        }

        const attributeRandoms = new BufferAttribute(randoms, 1);

        const attributeCenters = new BufferAttribute(centers, 3);

        geometry.setAttribute("aRandom", attributeRandoms);
        geometry.setAttribute("aCenter", attributeCenters);
        console.log(geometry);
      }
    }
  };

  useMemo(() => {
    fox.materials.fox_material.onBeforeCompile((shader: any) => {
      console.log(shader.fox_material, 'shader.fox_material');
      onUpdateMaterial(shader);
    });
    // fox.materials.fox_material.transparent = true
    // fox.materials.fox_material.opacity = 0.5
  }, [fox.materials]);

  return (
    <>
      <Perf position="bottom-right" />
      <OrbitControls makeDefault />
      <Environment
        background
        files="/assets/images/environmentMaps/blender/blender_2.hdr"
      ></Environment>
      <group>
        <primitive
          object={fox.scene}
          scale={0.02}
          position={[0, -1, 0]}
          rotation-y={0.3}
        />
      </group>
    </>
  );
};

export default Experience;
