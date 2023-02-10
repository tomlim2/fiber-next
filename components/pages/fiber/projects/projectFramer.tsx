import { useEffect, useRef, useState, RefObject } from "react";
import styled from "styled-components";

interface Props {
  children: any;
  title?: string;
  framerIndex: number;
}

const ProjectFramer: React.FC<Props> = ({
  children,
  title = "pattern",
  framerIndex,
}) => {
  const [isCurrentSection, setIsCurrentSection] = useState(false);
  const refFramer = useRef() as RefObject<HTMLDivElement>;

  useEffect(() => {
    checkScreen();
    window.addEventListener("scroll", checkScreen);

    return () => {
      window.removeEventListener("scroll", checkScreen);
    };
  });

  function checkScreen(): void {
    const scrollY = window.scrollY;
    const newSection = Math.round(scrollY / window.innerHeight);
    if (framerIndex !== newSection) {
      setIsCurrentSection(false);
    } else {
      setIsCurrentSection(true);
    }
  }

  return (
    <Framer ref={refFramer} isCurrentSection={isCurrentSection}>
      {isCurrentSection && children}
    </Framer>
  );
};

export default ProjectFramer;

interface FramerInterface {
  isCurrentSection: boolean;
}

export const Framer = styled.section<FramerInterface>`
  display: grid;
  gap: 24px;
  grid-template-columns: calc(100vh - 24px) 1fr;
  height: 100vh;
  padding: 24px;
`;
