import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

import SectionAbout from "@/components/sections/about/sectionAbout";

export const metadata: Metadata = {
    title: "About | yslim",
    description: "Note about geometry node",
  };

const About = () => {
  return (
    <div>
      <SectionAbout />
    </div>
  );
};

export default About;