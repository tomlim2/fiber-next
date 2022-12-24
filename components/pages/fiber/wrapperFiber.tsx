import styled from "styled-components";
import Title from "@/components/texts/title";

interface Props {
  children: React.ReactNode;
  title?: string;
}

const WapperFiber: React.FC<Props> = ({
  children,
  title = "pattern",
}) => {

  return (
    <Wrapper>
      <div>{children}</div>
      <div></div>
      <Title>{title}</Title>
    </Wrapper>
  );
};

export default WapperFiber;

export const Wrapper = styled.div``;
