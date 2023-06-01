import PostAni from "../common/postAni";
import styled from "styled-components";

import VerFragA from "./projects/verFragA";

const aniList = [
  {
    info: "Pattern BN: Raging sea",
    component: <VerFragA />,
  },
];

const VertextFragnent = () => {
  return (
    <SectionWrapper>
      <Container>
        {aniList.map((item, index) => {
          return (
            <PostAni
              key={index}
              shaderIndex={index}
              canvasComponent={item.component}
              info={item.info}
            />
          );
        })}
      </Container>
    </SectionWrapper>
  );
};

export default VertextFragnent;

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
