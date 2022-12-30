import testFragmentShader from "raw-loader!glslify-loader!./glsl/testFragment.glsl";
import testVertexShader from "raw-loader!glslify-loader!./glsl/testVertex.glsl";
import { Canvas } from "@react-three/fiber";
import ProjectFramer from "@/components/pages/fiber/projects/projectFramer";
import Title from "@/components/texts/title";
import { useRef } from "react";
import type { Ref } from "react";
import type { Group, Mesh, BufferGeometry, Material } from "three";
import Paragraph from "@/components/texts/paragraph";
import TextLink from "@/components/texts/textLink";

interface Props {}

const ProjectGlsl: React.FC<Props> = () => {
  const created = (state: any) => {
    state.gl.setClearColor("#252525");
  };
  return (
    <ProjectFramer>
      <div>
        <Canvas onCreated={created}>
          <mesh scale={6}>
            <planeGeometry />
            <shaderMaterial
              fragmentShader={testFragmentShader}
              vertexShader={testVertexShader}
            />
          </mesh>
        </Canvas>
      </div>
      <div className="infos">
        <div>
          <Title usage="title">GLSL</Title>
          <Paragraph>Setup references</Paragraph>
        </div>
        <div>
          <br />
          <TextLink to="https://blog.maximeheckel.com/posts/the-study-of-shaders-with-react-three-fiber/">
            The Study of Shaders with React Three Fiber
          </TextLink>
          <br />
          <TextLink to="https://whoisryosuke.com/blog/2022/react-three-fiber-and-nextjs-starter-template/">
            React Three Fiber and NextJS Starter Template
          </TextLink>
        </div>
      </div>
    </ProjectFramer>
  );
};

export default ProjectGlsl;
