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
  MeshBasicMaterial,
} from "three";
import { shaders } from "./shader/index";
import { useControls } from "leva";

const Experience = () => {
  const gltfModel = useGLTF(
    "/assets/models/mammuthus/source/woolly-mammoth-150k-4096-web.gltf"
  ) as any;
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
        attribute float aRandom;
        attribute vec3 aCenter;
        mat2 get2dRotateMatrix(float _angle)
        {
            return mat2(cos(_angle), - sin(_angle), sin(_angle), cos(_angle));
        }
        mat4 rotation3d(vec3 axis, float angle) {
          axis = normalize(axis);
          float s = sin(angle);
          float c = cos(angle);
          float oc = 1.0 - c;
        
          return mat4(
            oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
            oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
            oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
            0.0,                                0.0,                                0.0,                                1.0
          );
        }
        vec3 rotate(vec3 v, vec3 axis, float angle){
          mat4 m = rotation3d(axis, angle);
          return (m*vec4(v,1.0)).xyz;
        }
      `
    );
    shader.vertexShader = shader.vertexShader.replace(
      "#include <begin_vertex>",
      `
        #include <begin_vertex>
        //transformed = (transformed - aCenter)*uProgress + aCenter;


        //float prog = (position.y + 8.0)/4.0;
        //float locprog = clamp((uProgress-0.8*prog)/0.8,0.0,10.);
        //transformed -= aCenter;
        //transformed *= locprog;
        //transformed += aCenter;


        float prog = (position.y + 2.0)/2.0;
        float locprog = clamp((uProgress - 0.2 * prog) / 0.5, 0.0, 1.0);
        transformed -= aCenter;
        transformed += .5*aRandom*normal*locprog;
        transformed *= (1.0-locprog);
        transformed += aCenter;
        transformed = rotate(transformed, vec3(0.0,1.0,0.0),locprog*aRandom*3.14*3.0);
      `
    );
  };

  useFrame((state, delta) => {
    if (meshRef?.current?.material) {
      customUniforms.uTime.value += delta;
    }
  });

  const onUpdateGeo = (geometry: BufferGeometry) => {
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
  };
  let s = 0.04;
  const mesh = gltfModel.nodes.mesh_0.geometry;
  console.log(mesh, "meshmesh");

  mesh.scale(s, s, s);
  const nonIndexedGeometry = mesh.toNonIndexed();

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
        <mesh>
          <bufferGeometry
            {...nonIndexedGeometry}
            onUpdate={(geometry: BufferGeometry) => {
              onUpdateGeo(geometry);
            }}
          />
          <meshStandardMaterial
            ref={materialRef}
            side={DoubleSide}
            color={"#f0f0f0"}
            onBeforeCompile={(shader) => onUpdateMaterial(shader)}
          />
        </mesh>
      </group>
    </>
  );
};

export default Experience;
