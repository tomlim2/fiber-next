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
import PostAni from "./postAni";
import PostStill from "./postStill";
import styled from "styled-components";

const aniList = [
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
    component: <ProjectBookOfShaders />,
  },
  {
    info: "Pattern A",
    component: <ProjectGlslPatterns />,
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
  width: 848px;
  margin-top: 48px;
  padding-bottom: 48px;
`;
