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
  grid-template-columns: 2fr 1fr;

  .canvas-framer {
  }
  .infos {
  }
`;
