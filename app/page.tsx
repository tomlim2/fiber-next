import styles from "./page.module.scss";
import Link from "next/link";

const PageHome = () => {
  return (
    <main className={styles.main}>
      <section>Hi!</section>
      <section>
        <ul className={styles.works}>
          <li className="shader">
            <h3>SHADER</h3>
            <ul>
              <li>
                <Link href="/fiber/vertex-fragnent">Vertex-Fragnent</Link>
              </li>
              <li>
                <Link href="/fiber/fragnent-time">Fragnent-Time</Link>
              </li>
              <li>
                <Link href="/fiber/fragnent-still">Fragnent-Still</Link>
              </li>
            </ul>
          </li>
          <li className="p5">
            <h3>P5</h3>
            <ul>
              <li>
                <Link href="/p5/vfa">Vector Field</Link>
              </li>
              <li>
                <Link href="/p5/boid">Boids</Link>
              </li>
            </ul>
          </li>
          <li className="blender">
            <h3>BLENDER</h3>
            <Link href="/blender/geometry-node">Geometry Node</Link>
          </li>
          <li className="design">
            <h3>DESIGN</h3>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default PageHome;
