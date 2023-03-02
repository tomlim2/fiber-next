import GlobalHeader from "@/components/pages/globalHeader";
import styled from "styled-components";

interface Props {
  children: React.ReactElement;
}

const LayoutDefault: React.FC<Props> = ({ children }) => {
  return (
    <Layout>
      <GlobalHeader />
      <PageWrapper>
        <main className="page">{children}</main>
      </PageWrapper>
    </Layout>
  );
};

export default LayoutDefault;
export const Layout = styled.div``;
export const PageWrapper = styled.div`
`;
