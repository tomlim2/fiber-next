"use client";
import React, { useRef, useEffect } from "react";
import styles from "./wrapperP5.module.scss";

import p5 from "p5";
interface IP5Wrapper {
  sketch: any;
}

const WrapperP5: React.FC<IP5Wrapper> = ({ sketch }) => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const p5Instance = new p5(sketch, canvasRef.current);
      return () => {
        p5Instance.remove();
      };
    }
  }, [sketch]);

  return (
    <div className={styles["section-p5"]}>
      <div className={styles["container-p5"]}>
        <div ref={canvasRef} />
      </div>
    </div>
  );
};

export default WrapperP5;
