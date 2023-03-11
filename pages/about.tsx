import LayoutDefault from "layouts/layoutDefault";
import SectionAbout from "@/components/pages/about/sectionAbout";

const About = () => {
  return (
    <div>
      <SectionAbout />
    </div>
  );
};

export default About;

About.getLayout = function getLayout(page: React.ReactElement) {
  return <LayoutDefault>{page}</LayoutDefault>;
};
