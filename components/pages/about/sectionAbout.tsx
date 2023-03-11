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
