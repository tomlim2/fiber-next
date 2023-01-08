import styled from "styled-components";

import TextLink from "@/components/texts/textLink";
import { Section } from "styles/section";

import type { ISectionProps } from "types/app";


const SectionWorks: React.FC<ISectionProps> = ({ backgroundColor, color }) => {
  const sectionStyles = { backgroundColor, color };

  return (
    <SectionExtend sectionStyles={sectionStyles}>
      <ul className="works">
        <li className="work">
          <TextLink to="/fiber">Fiber</TextLink>
        </li>
        <li className="work">
          <TextLink to="/design">Designs</TextLink>
        </li>
      </ul>
    </SectionExtend>
  );
};

export default SectionWorks;

export const SectionExtend = styled(Section)`
  ul.works {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;

    .work {
    }
  }
`;
