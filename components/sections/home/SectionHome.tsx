import styles from "./SectionHome.module.scss";
import Link from "next/link";
const SectionHome = () => {
  const routeInfo = [
    {
      categoryName: "Fiber",
      urlList: [
        { name: "Raymarch101", url: "/fiber/raymarch101" },
        { name: "Models", url: "/fiber/models" },
        { name: "Vertex-Fragnent", url: "/fiber/vertex-fragnent" },
        { name: "Fragnent-Time", url: "/fiber/fragnent-time" },
        { name: "Fragnent-Still", url: "/fiber/fragnent-still" },
        { name: "Drei-Portal", url: "/fiber/drei-portal" },
        {
          name: "Journey-Physics-Base",
          url: "/fiber/journey-physics",
        },
        {
          name: "Journey-Physics-GLTF",
          url: "/fiber/journey-physics-gltf",
        },
        {
          name: "Journey-Postprocess",
          url: "/fiber/journey-postprocess",
        },
        {
          name: "Journey-Models",
          url: "/fiber/journey-models",
        },
        {
          name: "Journey-Stage",
          url: "/fiber/journey-stage",
        },
        {
          name: "Journey-Env",
          url: "/fiber/journey-env",
        },
        {
          name: "Journey-Env-Model",
          url: "/fiber/journey-env-model",
        },
      ],
    },
    {
      categoryName: "P5",
      urlList: [
        { name: "Boid", url: "/p5/boid" },
        { name: "Vector Field", url: "/p5/vfa" },
      ],
    },
    {
      categoryName: "Blender",
      urlList: [{ name: "Geometry Node", url: "/blender/geometry-node" }],
    },
    {
      categoryName: "Design",
      urlList: [{ name: "UI", url: "/design/ui" }],
    },
  ];

  return (
    <section className="sectionHome">
      <ul className={styles.categories}>
        {routeInfo.map((categoryItem, categoryIndex) => {
          return (
            <li className={styles.category} key={categoryIndex}>
              <h2 className={styles.categoryName}>
                {categoryItem.categoryName}
              </h2>
              <ul className={styles.urlList}>
                {categoryItem.urlList.map((routeItem, routeIndex) => {
                  return (
                    <li key={routeIndex} className={styles.urlLink}>
                      <Link href={routeItem.url}>{routeItem.name}</Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default SectionHome;
