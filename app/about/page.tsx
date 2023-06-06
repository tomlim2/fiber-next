import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

import SectionAbout from "../../components/sections/about/SectionAbout";

export const metadata: Metadata = {
  title: "About | yslim",
  description: "Note about geometry node",
};

const About = () => {
  return (
    <main className="page-about">
      <SectionAbout />
    </main>
  );
};

export default About;
