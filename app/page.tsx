import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import styles from "./page.module.scss";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home | yslim",
  description: "My playground",
};

const PageHome = () => {
  return (
    <main className={styles.main}>
      <section>
        <ul className={styles.works}>
          <li className="shader">
            <h3 className="category-name">FIBER</h3>
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
              <li>
                <Link href="/fiber/journey-models">Journey-Models</Link>
              </li>
              <li>
                <Link href="/fiber/journey-stage">Journey-Stage</Link>
              </li>
              <li>
                <Link href="/fiber/journey-env">Journey-Env</Link>
              </li>
            </ul>
          </li>
          <li className="p5">
            <h3 className="category-name">P5</h3>
            <ul>
              <li>
                <Link href="/p5/boid">Boids</Link>
              </li>
              <li>
                <Link href="/p5/vfa">Vector Field</Link>
              </li>
            </ul>
          </li>
          <li className="blender">
            <h3 className="category-name">BLENDER</h3>
            <ul>
              <li>
                <Link href="/blender/geometry-node">Geometry Node</Link>
              </li>
            </ul>
          </li>
          <li className="design">
            <h3 className="category-name">DESIGN</h3>
            <ul>
              <li>
                <Link href="/design/ui">UI</Link>
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default PageHome;
