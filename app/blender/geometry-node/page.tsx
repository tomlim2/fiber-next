import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import styles from "./page.module.scss";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Geometry node | Blender | yslim",
  description: "Note about geometry node",
};

const GeometryNodes = () => {
  return (
    <section className={styles["section-blender"]}>
      <ul>
        <li>
          1.
          <br />
          <Image
            src="/assets/images/blenderGeometryNodes/blender_geometry_nodes_1.png"
            alt="Description of the image"
            width={500}
            height={300}
          />
        </li>
        <li>
          2.
          <br />
          <Image
            src="/assets/images/blenderGeometryNodes/blender_geometry_nodes_2.png"
            alt="Description of the image"
            width={500}
            height={300}
          />
        </li>
        <li>
          3.
          <br />
          <Image
            src="/assets/images/blenderGeometryNodes/blender_geometry_nodes_3.png"
            alt="Description of the image"
            width={500}
            height={500}
          />
        </li>
        <li>
          4.
          <br />
          <Image
            src="/assets/images/blenderGeometryNodes/blender_geometry_nodes_4.png"
            alt="Description of the image"
            width={500}
            height={300}
          />
        </li>
      </ul>
    </section>
  );
};

export default GeometryNodes;
