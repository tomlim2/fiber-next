import { useRouter } from "next/router";
import { useState } from "react";
import { styleColor } from "styles/color";
import styled, { css } from "styled-components";

type UsageType = "default" | "border";

interface Props {
  usage?: UsageType;
  to?: string | undefined;
  children: React.ReactNode;
  onClick?: Function;
  onMouseEnter?: Function;
  disabled?: boolean;
  backgroundColor?: string;
  color?: string;
}

const ButtonBasic: React.FC<Props> = ({
  usage,
  to,
  onClick,
  onMouseEnter,
  disabled,
  children,
  backgroundColor,
  color,
}) => {
  const router = useRouter();
  const buttonStyles = {
    backgroundColor: backgroundColor,
    color: color,
  };

  const clickButton = () => {
    if (onClick) {
      return onClick();
    }
    if (to) {
      return router.push(to);
    }
  };

  const hoverOnButton = () => {
    if (onMouseEnter) {
      return onMouseEnter();
    }
  };

  return (
    <Button
      onClick={() => {
        clickButton();
      }}
      onMouseEnter={() => {
        hoverOnButton();
      }}
      style={buttonStyles}
      disabled={disabled}
      usage={usage ?? "default"}
    >
      {children}
    </Button>
  );
};

export default ButtonBasic;

interface IButton {
  usage: UsageType;
}

export const Button = styled.button<IButton>`
  ${(props) => styleUsage[props.usage]}
  cursor: pointer;

  &:disabled {
    opacity: 0.75;
    pointer-events: none;
  }
`;

const styleDefault = css`
  color: ${styleColor.black100};

  &:hover {
    color: blue;
  }
`;

const styleBorder = css`
  padding: 4px 8px;
  border: 1px solid ${styleColor.black200};
  background-color: ${styleColor.white0};
  color: ${styleColor.black200};
  font-family: "SourceCodePro", monospace;
  font-weight: 600;
  font-style: normal;

  &:hover {
    border: 1px solid ${styleColor.black100};
    background-color: ${styleColor.white0};
    color: ${styleColor.black100};
  }

  &:disabled {
    border: 1px solid ${styleColor.black100};
    background-color: ${styleColor.white0};
    color: ${styleColor.black100};
  }
`;
const styleUsage = {
  default: styleDefault,
  border: styleBorder,
};
