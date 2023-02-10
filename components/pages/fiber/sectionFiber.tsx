import ProjectFramer from "@/components/pages/fiber/projects/projectFramer";
import ProjectGlslPatterns from "@/components/pages/fiber/projects/projectGlslPatterns/glslPatterns";
import ProjectBookOfShaders from "@/components/pages/fiber/projects/projectBookOfShaders/bookOfShaders";

const SectionFiber = () => {
  return (
    <div>
      <ProjectFramer framerIndex={0}>
        <ProjectGlslPatterns />
      </ProjectFramer>
      <ProjectFramer framerIndex={1}>
        <ProjectBookOfShaders />
      </ProjectFramer>
    </div>
  );
};

export default SectionFiber;
