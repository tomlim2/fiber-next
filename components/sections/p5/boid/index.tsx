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
          <h2 className="title-info">P5 Boid</h2>
          <div className="reference">
            References
            <ul >
              <li>
                <a
                  className="reference-link"
                  href="http://www.kfish.org/boids/pseudocode.html"
                >
                  Boids Pseudocode
                </a>
              </li>
              <li>
                <a
                  className="reference-link"
                  href="http://www.red3d.com/cwr/boids/"
                >
                  Boids Background and Update by Craig Reynolds
                </a>
              </li>
              <li>
                <a
                  className="reference-link"
                  href="https://threejs.org/examples/?q=bird#webgl_gpgpu_birds_gltf"
                >
                  gpgpu / birds / gltf
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionP5Boid;
