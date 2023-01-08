import styled, { css } from "styled-components";

type UsageType =
  | "page"
  | "section"
  | "about"
  | "main"
  | "title"
  | "subTitle"
  | "list"
  | "default";

export const Title = styled.div<IText>`
  ${(props) => (props.usage ? styleUsage[props.usage] : styleUsage["default"])}
`;

interface IText {
  usage?: UsageType;
}

const styleDefault = css`
  color: #252525;
  transition: opacity 300ms;
`;

const stylePage = css`
  font-size: 1.75rem;
  font-weight: 600;
`;

const styleMain = css`
  font-size: 1.75rem;
`;

const styleAbout = css`
  background: palevioletred;
  color: white;
  font-size: 1rem;
`;

const styleTitle = css`
  font-size: 1.25rem;
`;

const styleSection = css`
  font-weight: 600;
  font-size: 1.5rem;
`;

const styleList = css`
  font-weight: 600;
  font-size: 1rem;
`;

const styleSubTitle = css``;

const styleUsage = {
  page: stylePage,
  main: styleMain,
  section: styleSection,
  title: styleTitle,
  subTitle: styleSubTitle,
  list: styleList,
  about: styleAbout,
  default: styleDefault,
};
