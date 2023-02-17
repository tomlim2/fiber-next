import ProjectFramer from "@/components/pages/fiber/projects/projectFramer";
import ProjectGlslPatterns from "@/components/pages/fiber/projects/projectGlslPatterns/glslPatterns";
import ProjectBookOfShaders from "@/components/pages/fiber/projects/projectBookOfShaders/bookOfShaders";
import ProjectBookOfShadersAnimation from "@/components/pages/fiber/projects/projectBookOfShadersAnimation/bookOfShadersAnimation";

const SectionFiber = () => {
  return (
    <div>
      <ProjectFramer framerIndex={0}>
        <ProjectGlslPatterns />
      </ProjectFramer>
      <ProjectFramer framerIndex={1}>
        <ProjectBookOfShaders />
      </ProjectFramer>
      <ProjectFramer framerIndex={2}>
        <ProjectBookOfShadersAnimation />
      </ProjectFramer>
    </div>
  );
};

export default SectionFiber;
