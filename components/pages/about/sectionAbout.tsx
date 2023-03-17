import styled from "styled-components";

import TextLink from "components/texts/textLink";
import Paragraph from "@/components/texts/paragraph";

const SectionAbout = () => {
  return (
    <Section>
      <Paragraph usage="about">
        안녕하세요! 테크니컬 아티스트인 임연수입니다. 그래픽, 애니메이션, 그리고 프로그래밍 사이의 혼합물들을 실험하는 것에 촛점을 맞추고 있어서 제 작업물들 대부분은 3D, 모션 디자인, 브랜드 디자인 등 화면 기초로 한 미디어입니다.
        <br />
        <br />
        UX 리서처, UX 엔지니어, 그래픽 디자이너, 프론트 엔드 개발자 등 다양한 직군에서 일한 경험을 바탕으로 복합적이고 복잡한 문제에 직면해도 작게 시작하여 거대한 해결책을 제시하는 방식으로 업무를 진행합니다.
      </Paragraph>
      <Paragraph usage="about">
      tomandlim@gmail.com | 인스타그램 | 링크드인
      </Paragraph>
    </Section>
  );
};

export default SectionAbout;

export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 36px 12px;
`;
