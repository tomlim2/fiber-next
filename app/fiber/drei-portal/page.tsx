import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import SectionDreiPortal from "@/components/sections/fiber/drei-portal";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Drei Portal | Fiber | yslim",
  description: "My playground",
};

const DreiPortal = () => {
  return (
    <main className={styles.page}>
      <SectionDreiPortal />
    </main>
  );
};

export default DreiPortal;
