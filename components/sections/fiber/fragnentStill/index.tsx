import ProjectGlslPatterns from "./GlslPatterns/glslPatterns";
import ProjectBookOfShaders from "./BOS/bookOfShaders";

import styles from "../fiber.module.scss";

const stillList = [
  {
    info: "Pattern A",
    component: <ProjectBookOfShaders key={"s1"} />,
  },
  {
    info: "Pattern A",
    component: <ProjectGlslPatterns key={"s2"} />,
  },
];

const sectionShaderPatterns = () => {
  return (
    <section className={styles["section-fiber"]}>
      <div className={styles["container-fiber"]}>
        {stillList.map((item, index) => {
          return item.component;
        })}
      </div>
    </section>
  );
};

export default sectionShaderPatterns;
