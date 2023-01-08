import type { ISectionProps } from "types/app";
import styled from "styled-components";

interface ISection {
  sectionStyles?: ISectionProps;
}

export const Section = styled.section<ISection>`
  background-color: ${(props) =>
    props?.sectionStyles?.backgroundColor ?? "#fefefe"};
  color: ${(props) => props?.sectionStyles?.color ?? "#252525"};
`;
