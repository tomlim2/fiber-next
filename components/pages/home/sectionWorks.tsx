import styled from "styled-components";
import type { ISectionProps } from "types/app";

const SectionWorks: React.FC<ISectionProps> = ({ backgroundColor, color }) => {
  const sectionStyles = { backgroundColor, color };

  return <Section sectionStyles={sectionStyles}>hihihihi</Section>;
};

export default SectionWorks;

interface ISection {
  sectionStyles: ISectionProps;
}

export const Section = styled.section<ISection>`
  padding: 24px;
  background-color: ${(props) =>
    props.sectionStyles.backgroundColor ?? "#fafafa"};
  color: ${(props) => props.sectionStyles.color ?? "#252525"};
`;
