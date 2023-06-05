"use client";
import dynamic from "next/dynamic";
import SketchBoids from "@/components/sections/p5/boid/sketchBoids";
import styles from "../common/wrapperP5.module.scss";

const WrapperP5 = dynamic(() => import("../common/wrapperP5"), { ssr: false });

const SectionP5Boid = () => {
  return (
    <>
      <WrapperP5 sketch={SketchBoids} />
      <div className={styles["section-p5"]}>
        <div className={styles["container-info"]}>
          <a href="http://www.kfish.org/boids/pseudocode.html">
            Boids Pseudocode
          </a>
          <br />
          <a href="http://www.red3d.com/cwr/boids/">
            Boids Background and Update by Craig Reynolds
          </a>
        </div>
      </div>
    </>
  );
};

export default SectionP5Boid;
