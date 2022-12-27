import DefaultLayout from "layouts/layoutDefault";
import SectionSummary from "@/components/pages/home/sectionSummary";
import SectionWorks from "@/components/pages/home/sectionWorks";
import SectionExpLog from "@/components/pages/exps/sectionExpLog";
import SectionFramer from "@/components/pages/exps/sectionFramer";

import styled from "styled-components";

const PageHome = () => {
  return (
    <Home>
      <SectionSummary />
      <SectionWorks />
      <SectionExpLog />
      <SectionFramer />
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
