"use client";
import PostTime from "../common/postProject";
import styles from "../common/fiber.module.scss";
import { modelManager } from "./modelManager";

const SectionModels = () => {
  return (
    <div className={styles["section-shader"]}>
      <div className={styles["container-shader"]}>
        {modelManager.map((item, index) => {
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

export default SectionModels;
