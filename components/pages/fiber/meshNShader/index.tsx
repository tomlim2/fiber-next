import styled from "styled-components";

const MeshAndShader = () => {
  return (
    <SectionWrapper>
      <Container>
        Mesh and shader
      </Container>
    </SectionWrapper>
  );
};

export default MeshAndShader;

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
