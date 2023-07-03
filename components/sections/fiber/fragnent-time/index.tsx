"use client";
import PostProject from "../common/postProject";
import styles from "../common/fiber.module.scss";
import { shaderManager } from "./shaderManager";

const SectionFragnentTime = () => {
  return (
    <div className={styles["section-shader"]}>
      <div className={styles["container-shader"]}>
        {shaderManager.map((item, index) => {
          return (
            <PostProject
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

export default SectionFragnentTime;
