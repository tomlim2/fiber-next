import { shaderMap } from "./shaders";
import {
  Mesh,
  BufferGeometry,
  Material,
  ShaderMaterial,
  Color,
  BufferAttribute,
  PointsMaterial,
} from "three";
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

import { useFrame } from "@react-three/fiber";
import { useRef, useEffect, useState, useMemo } from "react";
import { useControls } from "leva";

const MeshObject: React.FC = () => {
  const meshRef = useRef<Mesh<BufferGeometry, Material | Material[]>>(null);
  const colorMap = useLoader(TextureLoader, "/assets/images/particles/1.png");
  const materialRef = useRef<PointsMaterial>(null);
  const planeDimention = {
    width: 6,
    height: 6,
    widthSegments: 512,
    heightSegments: 512,
  };

  const intiValue = {
    timeSpeedCtrl: 1,
    paramsACtrl: 0.2,
    paramsBCtrl: 4,
    paramsCCtrl: 1.5,
    paramsDCtrl: 1.4,
    colorACtrl: "#dcb3ff",
    colorBCtrl: "#ffffff",
  };

  const timeSpeed = useRef(intiValue.timeSpeedCtrl);

  const [_, set] = useControls(() => ({
    colorACtrl: {
      value: intiValue.colorACtrl,
      onChange: (value) => {
        if (materialRef && materialRef.current) {
          // materialRef.current.color = new Color(value);
        }
      },
    },
    colorBCtrl: {
      value: intiValue.colorBCtrl,
      onChange: (value) => {
        if (materialRef && materialRef.current) {
          // materialRef.current.uniforms.uColorB.value = new Color(value);
        }
      },
    },
    paramsACtrl: {
      value: intiValue.paramsACtrl,
      step: 1,
      min: 0,
      max: 10,
      onChange: (value) => {
        if (materialRef && materialRef.current) {
          // materialRef.current.uniforms.uParamsA.value = value;
        }
      },
    },
    paramsBCtrl: {
      value: intiValue.paramsBCtrl,
      step: 0.1,
      min: 0,
      max: 10,
      onChange: (value) => {
        if (materialRef && materialRef.current) {
          // materialRef.current.uniforms.uParamsB.value = value;
        }
      },
    },
    paramsCCtrl: {
      value: intiValue.paramsCCtrl,
      step: 0.1,
      min: 0,
      max: 10,
      onChange: (value) => {
        if (materialRef && materialRef.current) {
          // materialRef.current.uniforms.uParamsC.value = value;
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
          // materialRef.current.uniforms.uParamsD.value = value;
        }
      },
    },
    timeSpeedCtrl: {
      value: intiValue.timeSpeedCtrl,
      step: 0.1,
      min: 0,
      max: 10,
      onChange: (value) => {
        timeSpeed.current = value;
      },
    },
  }));

  const count = 3000;

  const spawner = useMemo(() => {
    const particles = new Array(count)
      .fill(0)
      .map(() => (0.5 - Math.random()) * 7.5);
    console.log(particles);
    
    return new BufferAttribute(new Float32Array(particles), 3);
  }, [count]);

  const spawnerColor = useMemo(() => {
    const particles = new Array(count).fill(0).map(() => Math.random());
    return new BufferAttribute(new Float32Array(particles), 3);
  }, [count]);

  useFrame((state, delta) => {
    if (materialRef && materialRef.current) {
      // materialRef.current.uniforms.uTime.value += delta * timeSpeed.current;
    }
  });

  return (
    <>
      <group>
        <points>
          <bufferGeometry>
            <bufferAttribute attach={"attributes-position"} {...spawner} />
            <bufferAttribute attach={"attributes-color"} {...spawnerColor} />
          </bufferGeometry>
          <pointsMaterial
            ref={materialRef}
            attach="material"
            vertexColors={true}
            color={new Color("#ff88cc")}
            transparent={true}
            alphaMap={colorMap}
            depthTest={false}
            size={0.1}
            sizeAttenuation={true}
          />
        </points>
      </group>
    </>
  );
};

export default MeshObject;
