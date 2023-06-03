import { useRouter } from "next/router";

import styles from "./button.module.scss";

interface Props {
  children: React.ReactNode;
  to?: string;
  onClick?: Function;
  onMouseEnter?: Function;
  disabled?: boolean;
  activated?: boolean;
  backgroundColor?: string;
  color?: string;
}

const ButtonBasic: React.FC<Props> = ({
  to,
  onClick,
  onMouseEnter,
  children,
}) => {

  const clickButton = () => {
    if (onClick) {
      return onClick();
    }
    if (to) {
      return alert('on');
    }
  };

  const hoverOnButton = () => {
    if (onMouseEnter) {
      return onMouseEnter();
    }
  };

  return (
    <button
      className={styles.button}
      onClick={() => {
        clickButton();
      }}
      onMouseEnter={() => {
        hoverOnButton();
      }}
    >
      {children}
    </button>
  );
};

export default ButtonBasic;
