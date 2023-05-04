import styled from "styled-components";
import Image from "next/image";

const GeometryNodes = () => {
  return (
    <SectionWrapper>
      <Container>Geometry Nodes</Container>
      <div>
        1.
        <br />
        <Image
          src="/assets/images/blenderGeometryNodes/blender_geometry_nodes_1.png"
          alt="Description of the image"
          width={500}
          height={300}
        />
      </div>
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
