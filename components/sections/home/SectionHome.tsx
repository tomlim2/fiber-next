import styles from "../../../app/page.module.scss";
import Link from "next/link";
const SectionHome = () => {
  const routeInfo = [
    {
      routeCategoryName: "Fiber",
      routeList: [
        { routeName: "Drei-Portal", routeHref: "/fiber/drei-portal" },
        { routeName: "Vertex-Fragnent", routeHref: "/fiber/vertex-fragnent" },
        { routeName: "Fragnent-Time", routeHref: "/fiber/fragnent-time" },
        { routeName: "Fragnent-Still", routeHref: "/fiber/fragnent-still" },
        {
          routeName: "Journey-Physics-Base",
          routeHref: "/fiber/journey-physics",
        },
        {
          routeName: "Journey-Physics-GLTF",
          routeHref: "/fiber/journey-physics-gltf",
        },
        {
          routeName: "Journey-Postprocess",
          routeHref: "/fiber/journey-postprocess",
        },
        {
          routeName: "Journey-Models",
          routeHref: "/fiber/journey-models",
        },
        {
          routeName: "Journey-Stage",
          routeHref: "/fiber/journey-stage",
        },
        {
          routeName: "Journey-Env",
          routeHref: "/fiber/journey-env",
        },
      ],
    },
    {
      routeCategoryName: "P5",
      routeList: [
        { routeName: "Boid", routeHref: "/p5/boid" },
        { routeName: "Vector Field", routeHref: "/p5/vfa" },
      ],
    },
    {
      routeCategoryName: "Blender",
      routeList: [
        { routeName: "Geometry Node", routeHref: "/blender/geometry-node" },
      ],
    },
    {
      routeCategoryName: "Design",
      routeList: [{ routeName: "UI", routeHref: "/design/ui" }],
    },
  ];
  return (
    <section>
      <ul className={styles.works}>
        {routeInfo.map((categoryItem, categoryIndex) => {
          return (
            <li className="blender" key={categoryIndex}>
              <h3 className="category-name">
                {categoryItem.routeCategoryName}
              </h3>
              <ul>
                {categoryItem.routeList.map((routeItem, routeIndex) => {
                  return (
                    <li key={routeIndex}>
                      <Link href={routeItem.routeHref}>
                        {routeItem.routeName}
                      </Link>
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
