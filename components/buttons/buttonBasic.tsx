import { useRouter } from "next/router";
import { useState } from "react";
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
  pushButtonColor?: string;
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
  pushButtonColor,
}) => {
  const [pushed, setPushed] = useState(false);
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
  color: #252525;

  &:hover {
    color: blue;
  }
`;

const styleBorder = css`
  padding: 4px 8px;
  border: 1px solid #888;
  background-color: #fefefe;
  color: #888;
  font-family: "SourceCodePro", monospace;
  font-weight: 600;
  font-style: normal;

  &:hover {
    border: 1px solid #252525;
    background-color: #fefefe;
    color: #252525;
  }

  &:disabled {
    border: 1px solid #000;
    background-color: #fefefe;
    color: #000;
  }
`;
const styleUsage = {
  default: styleDefault,
  border: styleBorder,
};
