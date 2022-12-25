import SectionSpotify from "@/components/pages/exps/sectionSpotify";
import styled from "styled-components";

interface Props {}

const PageExps: React.FC<Props> = () => {
  return (
    <Exps>
      <SectionSpotify />
    </Exps>
  );
};

export default PageExps;

export const Exps = styled.div`
  display: flex;
`;
