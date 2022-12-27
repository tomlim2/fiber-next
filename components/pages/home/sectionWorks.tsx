import styled from "styled-components";
import type { ISectionProps } from "types/app";

const SectionWorks: React.FC<ISectionProps> = ({ backgroundColor, color }) => {
  const sectionStyles = { backgroundColor, color };

  return (
    <Section sectionStyles={sectionStyles}>
      <ul className="works">
        <li className="work">Fibers</li>
        <li className="work">Designs</li>
      </ul>
    </Section>
  );
};

export default SectionWorks;

interface ISection {
  sectionStyles: ISectionProps;
}

export const Section = styled.section<ISection>`
  background-color: ${(props) =>
    props.sectionStyles.backgroundColor ?? "#fefefe"};
  color: ${(props) => props.sectionStyles.color ?? "#252525"};

  .works {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;

    .work{
        
    }
  }
`;
