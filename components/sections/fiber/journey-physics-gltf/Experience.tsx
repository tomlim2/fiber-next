// "use client";
import { useGLTF, Stage, OrbitControls } from "@react-three/drei";
import {
  InstancedRigidBodies,
  CylinderCollider,
  BallCollider,
  CuboidCollider,
  RigidBody,
  Physics,
} from "@react-three/rapier";
import { Perf } from "r3f-perf";
import { useMemo, useEffect, useState, useRef } from "react";
import { Vector3, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Experience = () => {
  const [hitSound] = useState(() => new Audio("/assets/sounds/hit.mp3"));
  const hamburger = useGLTF("/assets/models/hamburger.glb");
  const cube = useRef(null) as any;
  const twister = useRef(null) as any;
  const cubes = useRef(null) as any;
  const cubesCount = 200;
  const collisionEnter = () => {
    hitSound.currentTime = 0;
    hitSound.volume = Math.random();
    hitSound.play();
  };
  const instances = useMemo(() => {
    const instances = [] as any;

    for (let i = 0; i < cubesCount; i++) {
      const instanceScale = Math.random();
      instances.push({
        key: "instance_" + i,
        position: [
          (Math.random() - 0.5) * 8,
          6 + i * 0.2,
          (Math.random() - 0.5) * 8,
        ],
        rotation: [Math.random(), Math.random(), Math.random()],
        scale: [instanceScale, instanceScale, instanceScale],
      });
    }
    return instances;
  }, []);

  useFrame((state: any) => {
    const time = state.clock.getElapsedTime();
    const eulerRotation = new THREE.Euler(0, time * 3, 0);
    const quaternionRotation = new THREE.Quaternion();
    quaternionRotation.setFromEuler(eulerRotation);
    twister.current.setNextKinematicRotation(quaternionRotation);
    const angle = time * 0.5;
    const x = Math.cos(angle);
    const z = Math.sin(angle);
    twister.current.setNextKinematicTranslation({ x: x, y: -0.8, z: z });
  });

  const cubeJump = () => {
    const mass = cube.current.mass();
    console.log("jump");
    cube.current.applyImpulse({ x: 0, y: 5 * mass, z: 0 });
    cube.current.applyTorqueImpulse({
      x: Math.random() - 0.5,
      y: Math.random() - 0.5,
      z: Math.random() - 0.5,
    });
  };
  return (
    <>
      <Perf position="bottom-right" />

      <OrbitControls makeDefault />

      <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />
      <Physics gravity={[0, -9.81, 0]}>
        <InstancedRigidBodies instances={instances}>
          <instancedMesh
            castShadow
            receiveShadow
            args={[undefined, undefined, cubesCount]}
          >
            <boxGeometry />
            <meshStandardMaterial color="tomato" />
          </instancedMesh>
        </InstancedRigidBodies>
        <RigidBody colliders={false} position={[0, 4, 0]}>
          <primitive object={hamburger.scene} scale={0.25} />
          <CylinderCollider args={[0.65, 1.25]} position={[0, 0.7, 0]} />
        </RigidBody>
        <RigidBody colliders="ball" position={[-1.5, 2, 0]}>
          <mesh castShadow>
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
          </mesh>
        </RigidBody>

        <RigidBody
          ref={cube}
          position={[1.5, 2, 0]}
          gravityScale={1}
          restitution={0}
          friction={0.7}
          colliders={false}
          onCollisionEnter={collisionEnter}
          onCollisionExit={() => {
            console.log("exit");
          }}
          onSleep={() => {
            console.log("sleep");
          }}
          onWake={() => {
            console.log("wake");
          }}
        >
          <mesh castShadow onClick={cubeJump}>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
          </mesh>
          <CuboidCollider mass={2} args={[0.5, 0.5, 0.5]} />
        </RigidBody>

        <RigidBody
          ref={twister}
          position={[0, -0.8, 0]}
          friction={0}
          type="kinematicPosition"
        >
          <mesh castShadow scale={[0.4, 0.4, 3]}>
            <boxGeometry />
            <meshStandardMaterial color="red" />
          </mesh>
        </RigidBody>
        <RigidBody type="fixed" restitution={0} friction={0.7}>
          <mesh receiveShadow position-y={-1.25}>
            <boxGeometry args={[10, 0.5, 10]} />
            <meshStandardMaterial color="greenyellow" />
          </mesh>
        </RigidBody>
        <RigidBody type="fixed">
          <CuboidCollider args={[5, 2, 0.5]} position={[0, 1, 5.5]} />
          <CuboidCollider args={[5, 2, 0.5]} position={[0, 1, -5.5]} />
          <CuboidCollider args={[0.5, 2, 5]} position={[5.5, 1, 0]} />
          <CuboidCollider args={[0.5, 2, 5]} position={[-5.5, 1, 0]} />
        </RigidBody>
      </Physics>
    </>
  );
};

export default Experience;
