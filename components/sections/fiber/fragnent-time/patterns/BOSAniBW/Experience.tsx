import {
  Sky,
  AccumulativeShadows,
  Lightformer,
  useHelper,
  OrbitControls,
  ContactShadows,
  Environment,
} from "@react-three/drei";
import { shaders } from "./shaders";
import { Mesh, BufferGeometry, Material, ShaderMaterial, Color } from "three";
import { useFrame } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react";
import { useControls } from "leva";
import { Router, useRouter } from "next/router";

const Experience: React.FC = () => {
  const meshRef = useRef<Mesh<BufferGeometry, Material | Material[]>>(null);
  const materialRef = useRef<ShaderMaterial>(null);
  const planeDimention = { width: 3, height: 3 };

  const intiValue = {
    timeSpeedCtrl: 1,
    paramsACtrl: 10,
    paramsBCtrl: 0,
    paramsCCtrl: 1,
    paramsDCtrl: 0,
    colorACtrl: "#ff0000",
    colorBCtrl: "#ffffff",
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
      step: 1,
      min: -10,
      max: 10,
      onChange: (value) => {
        if (materialRef && materialRef.current) {
          materialRef.current.uniforms.uParamsA.value = value;
        }
      },
    },
    paramsBCtrl: {
      value: intiValue.paramsBCtrl,
      step: 0.1,
      min: -10,
      max: 10,
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
  });

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
        // files={[
        //   "/assets/images/environmentMaps/2/px.jpg",
        //   "/assets/images/environmentMaps/2/nx.jpg",
        //   "/assets/images/environmentMaps/2/py.jpg",
        //   "/assets/images/environmentMaps/2/ny.jpg",
        //   "/assets/images/environmentMaps/2/pz.jpg",
        //   "/assets/images/environmentMaps/2/nz.jpg",
        // ]}
        // files="/assets/images/environmentMaps/the_sky_is_on_fire_2k.hdr"
        // preset="sunset"
        // resolution={32}
        preset="sunset"
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
          <boxGeometry
            args={[
              planeDimention.width,
              planeDimention.width,
              planeDimention.height,
            ]}
          />
          <shaderMaterial
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
