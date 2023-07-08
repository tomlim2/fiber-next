import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import SectionRayMarch101 from "@/components/sections/fiber/raymarch101";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Drei Portal | Fiber | yslim",
  description: "My playground",
};

const DreiPortal = () => {
  return (
    <main className={styles.page}>
      <SectionRayMarch101 />
    </main>
  );
};

export default DreiPortal;
