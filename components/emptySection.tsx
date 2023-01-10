import type { ISectionProps } from "types/app";
import { Section } from "styles/section";

const SectionEmpty: React.FC<ISectionProps> = ({ backgroundColor, color }) => {
  const sectionStyles = { backgroundColor, color };

  return <Section sectionStyles={sectionStyles}>hi</Section>;
};

export default SectionEmpty;
