import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import SectionRayMarch101F4 from "@/components/sections/fiber/raymarch101-frag4";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Raymarch101 Frag2 | Fiber | yslim",
  description: "My playground",
};

const DreiPortal = () => {
  return (
    <main className={styles.page}>
      <SectionRayMarch101F4 />
    </main>
  );
};

export default DreiPortal;
