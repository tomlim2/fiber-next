import styled from "styled-components";

interface Props {
  children: any;
  title?: string;
}

const ProjectFramer: React.FC<Props> = ({ children, title = "pattern" }) => {
  return (
    <Framer>
      {children}
    </Framer>
  );
};

export default ProjectFramer;

export const Framer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: calc(100vh - 24px) 1fr;
  height: 100vh;
  padding: 24px;
`;
