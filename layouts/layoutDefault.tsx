import GlobalHeader from "@/components/pages/globalHeader";
import styled from "styled-components";

interface Props {
  children: React.ReactElement;
}

const LayoutDefault: React.FC<Props> = ({ children }) => {
  return (
    <>
      <GlobalHeader />
      <Page>{children}</Page>
    </>
  );
};

export default LayoutDefault;

export const Page = styled.main`
  
`;
