"use client";
import PostTime from "../common/postTime";
import styles from "../common/fiber.module.scss";

import VerFragA from "./patterns/verFragA";
import VerFragB from "./patterns/verFragB";

const aniList = [
  {
    info: "Pattern B: Particles",
    component: <VerFragB />,
  },
  {
    info: "Pattern A: Raging sea",
    component: <VerFragA />,
  },
];

const SectionVertexFragnent = () => {
  return (
    <div className={styles["section-shader"]}>
      <div className={styles["container-shader"]}>
        {aniList.map((item, index) => {
          return (
            <PostTime
              key={index}
              shaderIndex={index}
              canvasComponent={item.component}
              info={item.info}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SectionVertexFragnent;
