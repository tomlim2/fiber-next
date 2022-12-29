import styled from "styled-components";
import Title from "@/components/texts/title";

interface Props {
  children: any;
  title?: string;
}

const ProjectFramer: React.FC<Props> = ({ children, title = "pattern" }) => {
  return (
    <Framer>
      <div className="canvas-framer">{children}</div>
      <div className="infos">
        <Title>{title}</Title>
      </div>
    </Framer>
  );
};

export default ProjectFramer;

export const Framer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: calc(100vh - 48px) 1fr;
  height: calc(100vh - 48px);

  .canvas-framer {
  }
  .infos {
  }
`;
