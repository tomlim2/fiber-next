import { buildFeedbackPath, extractFeedback } from "pages/api/feedback";
import { flfi } from "data/workLog";

import DefaultLayout from "layouts/layoutDefault";
import SectionSpotify from "components/pages/exps/sectionSpotify";
import styled from "styled-components";
import SectionExpLog from "@/components/pages/exps/sectionWorkLogs";
import SectionFramer from "@/components/pages/exps/sectionFramer";
import SectionForm from "@/components/sections/sectionForm";

interface PageProps {
  feedbackItem: any;
  workLog: any;
}

const PageExps = (props: PageProps) => {
  return (
    <Exps>
      <SectionForm data={props.feedbackItem} />
      <SectionExpLog data={props.workLog} />
      <SectionSpotify />
      {/* <SectionFramer /> */}
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

export async function getStaticProps() {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);
  return {
    props: {
      feedbackItem: data,
      workLog: { flfi },
    },
  };
}
