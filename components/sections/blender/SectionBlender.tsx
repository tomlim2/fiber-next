import ListAndItemSimple from "../../common/ListAndItemSimple";
import { listBlender } from "./data";

import styles from "./SectionBlender.module.scss";

const SectionBlender = () => {
  return (
    <section className={styles.sectionBlender}>
      <ListAndItemSimple list={listBlender} />
    </section>
  );
};

export default SectionBlender;
