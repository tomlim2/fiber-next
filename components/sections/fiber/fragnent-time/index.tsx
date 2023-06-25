"use client";
import PostTime from "../common/postTime";
import styles from "../common/fiber.module.scss";
import { shaderManager } from "./shaderManager";

const SectionFragnentTime = () => {
  return (
    <div className={styles["section-shader"]}>
      <div className={styles["container-shader"]}>
        {shaderManager.map((item, index) => {
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

export default SectionFragnentTime;
