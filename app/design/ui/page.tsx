import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "UI | Design | yslim",
  description: "My playground",
};

const DesignUI = () => {
  return (
    <main className={styles["page-ui"]}>
      <section>
        <h1>h1</h1>
        <h2>h2</h2>
        <h3>h3</h3>
        <h4>h4</h4>
        <h5>h5</h5>
      </section>
      <section>
        <p>paragraph</p>
      </section>
    </main>
  );
};

export default DesignUI;
