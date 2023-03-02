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
import BOSAniJ from "@/components/pages/fiber/projects/BOSAniJ/BOSAniJ";
import BOSAniK from "@/components/pages/fiber/projects/BOSAniK/BOSAniK";
import BOSAniL from "@/components/pages/fiber/projects/BOSAniL/BOSAniL";
import BOSAniM from "@/components/pages/fiber/projects/BOSAniM/BOSAniM";
import styled from "styled-components";
import { useRef, useState, RefObject, useEffect } from "react";
import ProjectPost from "./projectPost";

const componentList = [
  {
    info: "Pattern M",
    component: <BOSAniM />,
  },
  {
    info: "Pattern L",
    component: <BOSAniL />,
  },
  // {
  //   component: <BOSAniK />,
  // },
  // {
  //   component: <BOSAniJ />,
  // },
  // {
  //   component: <BOSAniI />,
  // },
  // {
  //   component: <BOSAniH />,
  // },
  // {
  //   component: <BOSAniG />,
  // },
  // {
  //   component: <BOSAniF />,
  // },
  // {
  //   component: <BOSAniE />,
  // },
  // {
  //   component: <BOSAniD />,
  // },
  // {
  //   component: <BOSAniC />,
  // },
  // {
  //   component: <ProjectBookOfShadersAnimationB />,
  // },
  // {
  //   component: <ProjectBookOfShadersAnimationA />,
  // },
  // {
  //   component: <ProjectBookOfShaders />,
  // },
  // {
  //   component: <ProjectGlslPatterns />,
  // },
];

const SectionFiber = () => {
  return (
    <SectionWrapper>
      <Container>
        {componentList.map((item, index) => {
          return (
            <ProjectPost
              key={index}
              canvasComponent={item.component}
              info={item.info}
            />
          );
        })}
      </Container>
    </SectionWrapper>
  );
};

export default SectionFiber;

export const SectionWrapper = styled.section`
  display: flex;
  justify-content: center;
`;

export const Container = styled.ul`
  width: 848px;
  margin-top: 48px;
  padding-bottom: 48px;
`;