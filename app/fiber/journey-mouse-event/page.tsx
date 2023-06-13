import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import SectionJourneyMouseEvent from "@/components/sections/fiber/journey-mouse-event";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Journey Mouse Event | Fiber | yslim",
  description: "My playground",
};

const JourneyStage = () => {
  return (
    <main className={styles.page}>
      <SectionJourneyMouseEvent />
    </main>
  );
};

export default JourneyStage;
