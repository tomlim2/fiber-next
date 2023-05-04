import styled from "styled-components";

import TextLink from "components/texts/textLink";
import Paragraph from "@/components/texts/paragraph";

const SectionAbout = () => {
  return (
    <Section>
      <Paragraph usage="about">
        안녕하세요! 현재 한국 서울에서 테크니컬 아티스트로 일하고 있는 임연수입니다. 그래픽을 탐구하는 것을 좋아하고 시각적인 상징성과 기호 뿐만 아니라 그것을 구현하는 방법들 중 특히 애니메이션과 프로그래밍에 대해 관심이 많습니다.
        <br />
        <br />
        이에 주로 컴퓨터를 사용한 결과물들을 만들며 프론트 엔드 개발, 2D & 3D 모션 그래픽, 브랜드 디자인 분야 등에 종사했습니다. 
        <br />
        <br />
        프론트 엔드 개발자, UX 엔지니어, 그래픽 디자이너 등 다양한 직군에서 일한 경험을 바탕으로 서비스와 상품들의 디자인과 개발 사이에서 생기는 복잡하고 복합적인 문제에 대한 인식을 명확히 하고 작게 시작하여 점차적으로 해결책을 제시하는 방식으로 작업을 진행합니다.
        <br />
        <br />
        신사역, 압구정역 인근 유학 컨설턴팅 학원 강사로써 미국 대학을 지망하는 혹은 재학 중인 학생들을 대상으로 인터렉션, 애니메이션과 디자인 부분을 주말마다 9년 동안 강의를 제공하고 있습니다.

        <br />
        <br />
        <br />
        tomandlim@gmail.com | 인스타그램 | 링크드인
      </Paragraph>
    </Section>
  );
};

export default SectionAbout;

export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  padding: 64px 24px;
`;
