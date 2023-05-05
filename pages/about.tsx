import Head from "next/head";

import LayoutDefault from "layouts/layoutDefault";
import SectionAbout from "@/components/sections/about/sectionAbout";

const About = () => {
  const pageHeadData = (
    <Head>
      <title>About | yslim</title>
      <meta name="view-transition" content="same-origin" />
      <meta name="description" content="Welcome!" />
    </Head>
  );

  return (
    <div>
      {pageHeadData}
      <SectionAbout />
    </div>
  );
};

export default About;

About.getLayout = function getLayout(page: React.ReactElement) {
  return <LayoutDefault>{page}</LayoutDefault>;
};
