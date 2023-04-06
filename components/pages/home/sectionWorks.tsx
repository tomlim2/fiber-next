import styled from "styled-components";

import TextLink from "@/components/texts/textLink";
import { Section } from "styles/section";

import type { ISectionProps } from "types/app";


const SectionWorks: React.FC<ISectionProps> = ({ backgroundColor, color }) => {
  const sectionStyles = { backgroundColor, color };

  return (
    <SectionExtend sectionStyles={sectionStyles}>
      <ul className="works">
        <li className="shader">
          <TextLink to="/fiber/shader-patterns">Shader Patterns</TextLink>
        </li>
        <li className="blender">
          <TextLink to="/blender/geometry-node">Geometry Node</TextLink>
        </li>
        <li className="meshAndShader">
          <TextLink to="/fiber/mesh-and-shader">Mesh And Shader</TextLink>
        </li>
        <li className="design">
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
    gap: 16px;

    .work {
    }
  }
`;
