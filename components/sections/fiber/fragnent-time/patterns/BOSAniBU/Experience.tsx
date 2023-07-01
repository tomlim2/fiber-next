import {
  Sky,
  AccumulativeShadows,
  Lightformer,
  useHelper,
  OrbitControls,
  Edges,
  ContactShadows,
  MeshPortalMaterial,
  Environment,
  useGLTF
} from "@react-three/drei";
import { shaders } from "./shaders";
import { Mesh, BufferGeometry, Material, ShaderMaterial, Color } from "three";
import { useFrame } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react";
import { useControls } from "leva";
import { Router, useRouter } from "next/router";

const Experience: React.FC = () => {
  const { nodes } = useGLTF("/assets/models/aobox-transformed.glb") as any;
  const meshRef = useRef<Mesh<BufferGeometry, Material | Material[]>>(null);
  const materialRef = useRef<ShaderMaterial>(null);
  const planeDimention = { width: 3, height: 3 };

  const intiValue = {
    timeSpeedCtrl: 1,
    paramsACtrl: 5,
    paramsBCtrl: 0.8,
    paramsCCtrl: 0.02,
    paramsDCtrl: 1.4,
    colorACtrl: "#1d79a0",
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
      min: 1,
      max: 50,
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
      min: -0.1,
      max: 0.1,
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
        files="/assets/images/environmentMaps/blender/blender_2.hdr"
        // preset="sunset"
        // resolution={32}
      ></Environment>
      <group>
        <mesh castShadow receiveShadow geometry={nodes.Cube.geometry}></mesh>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[2, 2, 2]} />
          <Edges />
          <Side rotation={[0, 0, 0]} bg="orange" index={0}>
            <torusGeometry args={[0.65, 0.3, 64]} />
          </Side>
          <Side rotation={[0, Math.PI, 0]} bg="lightblue" index={1}>
            <torusKnotGeometry args={[0.55, 0.2, 128, 32]} />
          </Side>
          <Side
            rotation={[0, Math.PI / 2, Math.PI / 2]}
            bg="lightgreen"
            index={2}
          >
            <boxGeometry args={[1.15, 1.15, 1.15]} />
          </Side>
          <Side
            rotation={[0, Math.PI / 2, -Math.PI / 2]}
            bg="aquamarine"
            index={3}
          >
            <octahedronGeometry />
          </Side>
          <Side rotation={[0, -Math.PI / 2, 0]} bg="indianred" index={4}>
            <icosahedronGeometry />
          </Side>
          <Side rotation={[0, Math.PI / 2, 0]} bg="hotpink" index={5}>
            <dodecahedronGeometry />
          </Side>
        </mesh>
      </group>
    </>
  );
};

export default Experience;

function Side(props: any) {
  const { rotation = [0, 0, 0], bg = "#f0f0f0", children, index } = props;
  const mesh: any = useRef();
  const { worldUnits } = useControls({ worldUnits: false });
  const { nodes } = useGLTF("/assets/models/aobox-transformed.glb") as any;
  useFrame((state, delta) => {
    mesh.current.rotation.x = mesh.current.rotation.y += delta;
  });
  return (
    <MeshPortalMaterial worldUnits={worldUnits} attach={`material-${index}`}>
      {/** Everything in here is inside the portal and isolated from the canvas */}
      <ambientLight intensity={0.5} />
      <Environment preset="city" />
      {/** A box with baked AO */}
      <mesh
        castShadow
        receiveShadow
        rotation={rotation}
        geometry={nodes.Cube.geometry}
      >
        <meshStandardMaterial
          aoMapIntensity={1}
          aoMap={nodes.Cube.material.aoMap}
          color={bg}
        />
        <spotLight
          castShadow
          color={bg}
          intensity={2}
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          shadow-normalBias={0.05}
          shadow-bias={0.0001}
        />
      </mesh>
      {/** The shape */}
      <mesh castShadow receiveShadow ref={mesh}>
        {children}
        <meshLambertMaterial color={bg} />
      </mesh>
    </MeshPortalMaterial>
  );
}
