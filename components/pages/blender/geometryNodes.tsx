import styled from "styled-components";

const GeometryNodes = () => {
  return (
    <SectionWrapper>
      <Container>Geometry Nodes</Container>
    </SectionWrapper>
  );
};

export default GeometryNodes;

export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.ul`
  width: 648px;
  margin-top: 48px;
  padding-bottom: 48px;
`;
