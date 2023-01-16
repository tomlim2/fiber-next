import { useRouter } from "next/router";
import { useState } from "react";

import SvgComponent from "components/svg/svgComponent";

interface Props {
  to?: string | undefined;
  onClick?: Function;
  disabled?: boolean;
  backgroundColor?: string;
  color?: string;
  pushButtonColor?: string;
}

const ButtonIcon: React.FC<Props> = ({
  to,
  onClick,
  disabled,
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

  return (
    <button
      onClick={() => {
        clickButton();
        setPushed(true);
      }}
      style={buttonStyles}
      disabled={disabled}
    >
      <SvgComponent />
    </button>
  );
};

export default ButtonIcon;
