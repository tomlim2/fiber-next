import DefaultLayout from "layouts/layoutDefault";
import SectionSummary from "@/components/pages/home/sectionSummary";
import SectionWorks from "@/components/pages/home/sectionWorks";

import styled from "styled-components";

const PageHome = () => {
  return (
    <Home>
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
