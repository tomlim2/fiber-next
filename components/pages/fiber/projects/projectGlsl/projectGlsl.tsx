import testVertexShader from "raw-loader!glslify-loader!./glsl/testFragment.glsl";
import testFragmentShader from "raw-loader!glslify-loader!./glsl/testVertex.glsl";
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
  };
  return (
    <ProjectFramer title="GLSL">
      <Canvas onCreated={created}>
        <mesh scale={6}>
          <planeGeometry />
          <meshBasicMaterial color={"#f0f"}/>
        </mesh>
      </Canvas>
    </ProjectFramer>
  );
};

export default ProjectGlsl;
