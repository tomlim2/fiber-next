import Head from "next/head";

import DefaultLayout from "layouts/layoutDefault";
import SectionSummary from "@/components/pages/home/sectionSummary";
import SectionWorks from "@/components/pages/home/sectionWorks";

import styled from "styled-components";

const PageHome = () => {
  const pageHeadData = (
    <Head>
      <title>Home | yslim</title>
      <meta name="description" content="Welcome!" />
    </Head>
  );

  return (
    <Home>
      {pageHeadData}
      <SectionSummary />
      <SectionWorks />
    </Home>
  );
};

export default PageHome;

PageHome.getLayout = function getLayout(page: React.ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export const Home = styled.div`
  display: flex;
  flex-direction: column;

  gap: 24px;
`;
