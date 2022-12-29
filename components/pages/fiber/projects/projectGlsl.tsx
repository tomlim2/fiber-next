import { Canvas } from "@react-three/fiber";
import ProjectFramer from "@/components/pages/fiber/projects/projectFramer";
import { useRef } from "react";
import type { Ref } from "react";
import type { Group, Mesh, BufferGeometry, Material } from "three";

interface Props {}

const ProjectGlsl: React.FC<Props> = () => {
  const groupRef = useRef() as Ref<Group> | undefined;
  const cubeRef = useRef() as
    | Ref<Mesh<BufferGeometry, Material | Material[]>>
    | undefined;
  const created = (state: any) => {
    state.gl.setClearColor("#252525");
    console.log(state);
  };
  return (
    <ProjectFramer title="GLSL">
      <Canvas onCreated={created}>
        <group ref={groupRef}>
          <mesh position-x={-2}>
            <sphereGeometry />
            <meshStandardMaterial color={"#777"} />
          </mesh>
          <mesh
            ref={cubeRef}
            rotation-y={Math.PI * 0.25}
            position-x={2}
            scale={1.5}
          >
            <boxGeometry />
            <meshStandardMaterial color={"#555"} />
          </mesh>
        </group>

        <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
          <planeGeometry />
          <meshStandardMaterial color={"#333"} />
        </mesh>
      </Canvas>
    </ProjectFramer>
  );
};

export default ProjectGlsl;
