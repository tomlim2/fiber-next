import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import SectionRayMarch101F7 from "@/components/sections/fiber/raymarch101-frag7";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Raymarch101 Frag7 | Fiber | yslim",
  description: "My playground",
};

const DreiPortal = () => {
  return (
    <main className={styles.page}>
      <SectionRayMarch101F7 />
    </main>
  );
};

export default DreiPortal;
