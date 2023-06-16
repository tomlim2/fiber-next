// "use client";
import { Stage, OrbitControls } from "@react-three/drei";
import { Debug, RigidBody, Physics, CuboidCollider } from "@react-three/rapier";
import { Perf } from "r3f-perf";
import { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Experience = () => {
  const [hitSound] = useState(() => new Audio("/assets/sounds/hit.mp3"));
  const cube = useRef(null) as any;
  const twister = useRef(null) as any;

  const collisionEnter = () => {
    console.log("collision!");
    hitSound.currentTime = 0;
    hitSound.volume = Math.random();
    hitSound.play();
  };

  useFrame((state: any) => {
    const time = state.clock.getElapsedTime();
    console.log(time);
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
        <Debug />
        {/* <mesh castShadow position={[-2, 2, 0]}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
        </mesh> */}

        {/* <RigidBody colliders="trimesh">
          <mesh
            castShadow
            position={[0, 1, -0.25]}
            rotation={[Math.PI * 0.1, 0, 0]}
          >
            <torusGeometry args={[1, 0.5, 16, 32]} />
            <meshStandardMaterial color="mediumpurple" />
          </mesh>
        </RigidBody>

        <RigidBody colliders="ball">
          <mesh castShadow position={[0, 4, 0]}>
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
          </mesh>
        </RigidBody> */}
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
