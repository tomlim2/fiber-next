import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import SectionAnimatingTriangles from "@/components/sections/fiber/animating-tri1";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Animating Triangles | Fiber | yslim",
  description: "My playground",
};

const Page = () => {
  return (
    <main className={styles.page}>
      <SectionAnimatingTriangles />
    </main>
  );
};

export default Page;
