import styled from "styled-components";

import ProjectGlslPatterns from "./projects/GlslPatterns/glslPatterns";
import ProjectBookOfShaders from "./projects/BOS/bookOfShaders";

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
