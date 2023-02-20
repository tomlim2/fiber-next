import ProjectFramer from "@/components/pages/fiber/projects/projectFramer";
import ProjectGlslPatterns from "@/components/pages/fiber/projects/GlslPatterns/glslPatterns";
import ProjectBookOfShaders from "@/components/pages/fiber/projects/BOS/bookOfShaders";
import ProjectBookOfShadersAnimationA from "@/components/pages/fiber/projects/BOSAniA/bookOfShadersAnimationA";
import ProjectBookOfShadersAnimationB from "@/components/pages/fiber/projects/BOSAniB/bookOfShadersAnimationB";
import BOSAniC from "@/components/pages/fiber/projects/BOSAniC/BOSAniC";
import BOSAniD from "@/components/pages/fiber/projects/BOSAniD/BOSAniD";
import BOSAniE from "@/components/pages/fiber/projects/BOSAniE/BOSAniE";

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
        <ProjectBookOfShadersAnimationA />
      </ProjectFramer>
      <ProjectFramer framerIndex={3}>
        <ProjectBookOfShadersAnimationB />
      </ProjectFramer>
      <ProjectFramer framerIndex={4}>
        <BOSAniC />
      </ProjectFramer>
      <ProjectFramer framerIndex={5}>
        <BOSAniD />
      </ProjectFramer>
      <ProjectFramer framerIndex={6}>
        <BOSAniE />
      </ProjectFramer>
    </div>
  );
};

export default SectionFiber;
