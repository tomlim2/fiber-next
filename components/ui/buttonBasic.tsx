import { useRouter } from "next/router";
import { styleColor } from "styles/color";
import styled, { css } from "styled-components";

type UsageType = "default" | "border";

interface Props {
  usage?: UsageType;
  to?: string;
  children: React.ReactNode;
  onClick?: Function;
  onMouseEnter?: Function;
  disabled?: boolean;
  activated?: boolean;
  backgroundColor?: string;
  color?: string;
}

const ButtonBasic: React.FC<Props> = ({
  usage,
  to,
  onClick,
  onMouseEnter,
  disabled,
  activated,
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
      className={`${activated ? "activated" : ""}`}
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

  &.activated {
    background-color: ${styleColor.black0};
  color: ${styleColor.white0};
  }

  &:disabled {
    opacity: 0.75;
    pointer-events: none;
  }
`;

const styleDefault = css`
  padding: 6px 8px;
  background-color: ${styleColor.black200};
  color: ${styleColor.white200};
  border: none;

  transition: 120ms background-color ease-in-out, 120ms color ease-in-out;

  &:hover {
    color: ${styleColor.white0};
    background-color: ${styleColor.black0};
  }
`;

const styleBorder = css`
  padding: 4px 8px;
  border: 1px solid ${styleColor.black200};
  background-color: ${styleColor.white0};
  color: ${styleColor.black200};

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
