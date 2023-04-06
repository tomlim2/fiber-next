import PostAni from "./postAni";
import styled from "styled-components";

import ProjectGlslPatterns from "@/components/pages/fiber/shaderPatterns/projects/GlslPatterns/glslPatterns";
import ProjectBookOfShaders from "@/components/pages/fiber/shaderPatterns/projects/BOS/bookOfShaders";
import ProjectBookOfShadersAnimationA from "@/components/pages/fiber/shaderPatterns/projects/BOSAniA/bookOfShadersAnimationA";
import ProjectBookOfShadersAnimationB from "@/components/pages/fiber/shaderPatterns/projects/BOSAniB/bookOfShadersAnimationB";
import BOSAniC from "@/components/pages/fiber/shaderPatterns/projects/BOSAniC/BOSAniC";
import BOSAniD from "@/components/pages/fiber/shaderPatterns/projects/BOSAniD/BOSAniD";
import BOSAniE from "@/components/pages/fiber/shaderPatterns/projects/BOSAniE/BOSAniE";
import BOSAniF from "@/components/pages/fiber/shaderPatterns/projects/BOSAniF/BOSAniF";
import BOSAniG from "@/components/pages/fiber/shaderPatterns/projects/BOSAniG/BOSAniG";
import BOSAniH from "@/components/pages/fiber/shaderPatterns/projects/BOSAniH/BOSAniH";
import BOSAniI from "@/components/pages/fiber/shaderPatterns/projects/BOSAniI/BOSAniI";
import BOSAniJ from "@/components/pages/fiber/shaderPatterns/projects/BOSAniJ/BOSAniJ";
import BOSAniK from "@/components/pages/fiber/shaderPatterns/projects/BOSAniK/BOSAniK";
import BOSAniL from "@/components/pages/fiber/shaderPatterns/projects/BOSAniL/BOSAniL";
import BOSAniM from "@/components/pages/fiber/shaderPatterns/projects/BOSAniM/BOSAniM";
import BOSAniN from "@/components/pages/fiber/shaderPatterns/projects/BOSAniN/BOSAniN";
import BOSAniO from "@/components/pages/fiber/shaderPatterns/projects/BOSAniO/BOSAniO";
import BOSAniP from "@/components/pages/fiber/shaderPatterns/projects/BOSAniP/BOSAniP";
import BOSAniQ from "@/components/pages/fiber/shaderPatterns/projects/BOSAniQ/BOSAniQ";
import BOSAniR from "@/components/pages/fiber/shaderPatterns/projects/BOSAniR/BOSAniR";
import BOSAniS from "@/components/pages/fiber/shaderPatterns/projects/BOSAniS/BOSAniS";
import BOSAniT from "@/components/pages/fiber/shaderPatterns/projects/BOSAniT/BOSAniT";
import BOSAniU from "@/components/pages/fiber/shaderPatterns/projects/BOSAniU/BOSAniU";
import BOSAniV from "@/components/pages/fiber/shaderPatterns/projects/BOSAniV/BOSAniV";
import BOSAniW from "@/components/pages/fiber/shaderPatterns/projects/BOSAniW/BOSAniW";
import BOSAniX from "@/components/pages/fiber/shaderPatterns/projects/BOSAniX/BOSAniX";
import BOSAniY from "@/components/pages/fiber/shaderPatterns/projects/BOSAniY/BOSAniY";
import BOSAniZ from "@/components/pages/fiber/shaderPatterns/projects/BOSAniZ/BOSAniZ";
import BOSAniAA from "@/components/pages/fiber/shaderPatterns/projects/BOSAniAA/BOSAniAA";
import BOSAniAB from "@/components/pages/fiber/shaderPatterns/projects/BOSAniAB/BOSAniAB";
import BOSAniAC from "@/components/pages/fiber/shaderPatterns/projects/BOSAniAC/BOSAniAC";
import BOSAniAD from "@/components/pages/fiber/shaderPatterns/projects/BOSAniAD/BOSAniAD";
import BOSAniAE from "@/components/pages/fiber/shaderPatterns/projects/BOSAniAE/BOSAniAE";
import BOSAniAF from "@/components/pages/fiber/shaderPatterns/projects/BOSAniAF/BOSAniAF";
import BOSAniAG from "@/components/pages/fiber/shaderPatterns/projects/BOSAniAG/BOSAniAG";
import BOSAniAH from "@/components/pages/fiber/shaderPatterns/projects/BOSAniAH/BOSAniAH";
import BOSAniAI from "@/components/pages/fiber/shaderPatterns/projects/BOSAniAI/BOSAniAI";
import BOSAniAJ from "@/components/pages/fiber/shaderPatterns/projects/BOSAniAJ/BOSAniAJ";

const aniList = [
  {
    info: "Pattern AJ",
    component: <BOSAniAJ />,
  },
  {
    info: "Pattern AI",
    component: <BOSAniAI />,
  },
  {
    info: "Pattern AH",
    component: <BOSAniAH />,
  },
  {
    info: "Pattern AG",
    component: <BOSAniAG />,
  },
  {
    info: "Pattern AF",
    component: <BOSAniAF />,
  },
  {
    info: "Pattern AE",
    component: <BOSAniAE />,
  },
  {
    info: "Pattern AD",
    component: <BOSAniAD />,
  },
  {
    info: "Pattern AC",
    component: <BOSAniAC />,
  },
  {
    info: "Pattern AB",
    component: <BOSAniAB />,
  },
  {
    info: "Pattern AA",
    component: <BOSAniAA />,
  },
  {
    info: "Pattern Z",
    component: <BOSAniZ />,
  },
  {
    info: "Pattern Y",
    component: <BOSAniY />,
  },
  {
    info: "Pattern X",
    component: <BOSAniX />,
  },
  {
    info: "Pattern W",
    component: <BOSAniW />,
  },
  {
    info: "Pattern V",
    component: <BOSAniV />,
  },
  {
    info: "Pattern U",
    component: <BOSAniU />,
  },
  {
    info: "Pattern T",
    component: <BOSAniT />,
  },
  {
    info: "Pattern S",
    component: <BOSAniS />,
  },
  {
    info: "Pattern R",
    component: <BOSAniR />,
  },
  {
    info: "Pattern Q",
    component: <BOSAniQ />,
  },
  {
    info: "Pattern P",
    component: <BOSAniP />,
  },
  {
    info: "Pattern O",
    component: <BOSAniO />,
  },
  {
    info: "Pattern N",
    component: <BOSAniN />,
  },
  {
    info: "Pattern M",
    component: <BOSAniM />,
  },
  {
    info: "Pattern L",
    component: <BOSAniL />,
  },
  {
    info: "Pattern K",
    component: <BOSAniK />,
  },
  {
    info: "Pattern J",
    component: <BOSAniJ />,
  },
  {
    info: "Pattern I",
    component: <BOSAniI />,
  },
  {
    info: "Pattern H",
    component: <BOSAniH />,
  },
  {
    info: "Pattern G",
    component: <BOSAniG />,
  },
  {
    info: "Pattern F",
    component: <BOSAniF />,
  },
  {
    info: "Pattern E",
    component: <BOSAniE />,
  },
  {
    info: "Pattern D",
    component: <BOSAniD />,
  },
  {
    info: "Pattern C",
    component: <BOSAniC />,
  },
  {
    info: "Pattern B",
    component: <ProjectBookOfShadersAnimationB />,
  },
  {
    info: "Pattern A",
    component: <ProjectBookOfShadersAnimationA />,
  },
];

const stillList = [
  {
    info: "Pattern A",
    component: <ProjectBookOfShaders key={"s1"} />,
  },
  {
    info: "Pattern A",
    component: <ProjectGlslPatterns key={"s2"} />,
  },
];

const sectionShaderPatterns = () => {
  return (
    <SectionWrapper>
      <Container>
        {aniList.map((item, index) => {
          return (
            <PostAni
              key={index}
              canvasComponent={item.component}
              info={item.info}
            />
          );
        })}
      </Container>
      <Container>
        {stillList.map((item, index) => {
          return item.component;
        })}
      </Container>
    </SectionWrapper>
  );
};

export default sectionShaderPatterns;

export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.ul`
  width: 648px;
  margin-top: 48px;
  padding-bottom: 48px;
`;
