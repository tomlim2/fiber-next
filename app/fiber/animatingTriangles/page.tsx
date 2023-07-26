import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import SectionEyeWithMaths from "@/components/sections/fiber/animatingTriangles";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Animating Triangles | Fiber | yslim",
  description: "My playground",
};

const Page = () => {
  return (
    <main className={styles.page}>
      <SectionEyeWithMaths />
    </main>
  );
};

export default Page;
