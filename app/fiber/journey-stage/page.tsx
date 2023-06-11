import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import SectionJourneyStage from "@/components/sections/fiber/journey-stage";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Journey Environment | Fiber | yslim",
  description: "My playground",
};

const JourneyStage = () => {
  return (
    <main className={styles.page}>
      <SectionJourneyStage />
    </main>
  );
};

export default JourneyStage;
