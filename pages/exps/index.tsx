import DefaultLayout from "layouts/layoutDefault";
import SectionSpotify from "components/pages/exps/sectionSpotify";
import styled from "styled-components";
import SectionExpLog from "@/components/pages/exps/sectionExpLog";
import SectionFramer from "@/components/pages/exps/sectionFramer";

const PageExps = () => {
  return (
    <Exps>
      <SectionExpLog />
      <SectionSpotify />
      <SectionFramer />
    </Exps>
  );
};

export default PageExps;

export const Exps = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

PageExps.getLayout = function getLayout(page: React.ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
