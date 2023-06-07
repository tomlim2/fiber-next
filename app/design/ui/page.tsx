import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "UI | Design | yslim",
  description: "My playground",
};

const DesignUI = () => {
  return (
    <main className='page'>
      <section className="section">
        <h1>h1</h1>
        <h2>h2</h2>
        <h3>h3</h3>
        <h3 className="category-name">h3: category name</h3>
        <h4>h4</h4>
        <h5>h5</h5>
      </section>
      <section className="section">
        <p>paragraph</p>
      </section>
      <section className="section">
        <a>link</a>
      </section>
    </main>
  );
};

export default DesignUI;
