import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import SectionJourneyPhysics from "@/components/sections/fiber/journey-physics";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Journey Physics | Fiber | yslim",
  description: "My playground",
};

const JourneyPhysics = () => {
  return (
    <main className={styles.page}>
      <SectionJourneyPhysics />
    </main>
  );
};

export default JourneyPhysics;
