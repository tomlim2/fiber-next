import styled from "styled-components";
import Title from "@/components/texts/title";

interface Props {
  children: any;
  title?: string;
}

const WapperFiber: React.FC<Props> = ({
  children,
  title = "pattern",
}) => {

  return (
    <Wrapper>
      <div className="canvas-wrapper">{children}</div>
      <div className="infos"><Title>{title}</Title></div>
    </Wrapper>
  );
};

export default WapperFiber;

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;

    .canvas-wrapper{
        
    }
    .infos{
        
    }
`;
