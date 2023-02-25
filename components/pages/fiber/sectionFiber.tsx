import ProjectFramer from "@/components/pages/fiber/projects/projectFramer";
import ProjectGlslPatterns from "@/components/pages/fiber/projects/GlslPatterns/glslPatterns";
import ProjectBookOfShaders from "@/components/pages/fiber/projects/BOS/bookOfShaders";
import ProjectBookOfShadersAnimationA from "@/components/pages/fiber/projects/BOSAniA/bookOfShadersAnimationA";
import ProjectBookOfShadersAnimationB from "@/components/pages/fiber/projects/BOSAniB/bookOfShadersAnimationB";
import BOSAniC from "@/components/pages/fiber/projects/BOSAniC/BOSAniC";
import BOSAniD from "@/components/pages/fiber/projects/BOSAniD/BOSAniD";
import BOSAniE from "@/components/pages/fiber/projects/BOSAniE/BOSAniE";
import BOSAniF from "@/components/pages/fiber/projects/BOSAniF/BOSAniF";
import BOSAniG from "@/components/pages/fiber/projects/BOSAniG/BOSAniG";
import BOSAniH from "@/components/pages/fiber/projects/BOSAniH/BOSAniH";
import BOSAniI from "@/components/pages/fiber/projects/BOSAniI/BOSAniI";
import styled from "styled-components";
import { useRef, useState, RefObject, useEffect } from "react";

const componentList = [
  {
    component: <BOSAniI />,
  },
  {
    component: <BOSAniH />,
  },
  {
    component: <BOSAniG />,
  },
  {
    component: <BOSAniF />,
  },
  {
    component: <BOSAniE />,
  },
  {
    component: <BOSAniD />,
  },
  {
    component: <BOSAniC />,
  },
  {
    component: <ProjectBookOfShadersAnimationB />,
  },
  {
    component: <ProjectBookOfShadersAnimationA />,
  },
  {
    component: <ProjectBookOfShaders />,
  },
  {
    component: <ProjectGlslPatterns />,
  },
];

const SectionFiber = () => {
  const [currentSection, setCurrentSection] = useState<number>(0);
  const refContainer = useRef() as RefObject<HTMLDivElement>;

  function checkScreen(): void {
    const scrollTop = refContainer.current?.scrollTop;
    if (scrollTop) {
      const newSection = Math.round(scrollTop / window.innerHeight);
      setCurrentSection(newSection);
    }
  }

  return (
    <Container onScroll={checkScreen} ref={refContainer}>
      {componentList.map((item, index) => {
        return (
          <ProjectFramer key={index} isOn={currentSection == index}>
            {item.component}
          </ProjectFramer>
        );
      })}
    </Container>
  );
};

export default SectionFiber;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
`;
