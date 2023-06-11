import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import SectionJourneyModels from "@/components/sections/fiber/journey-models";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Journey Environment | Fiber | yslim",
  description: "My playground",
};

const JourneyModels = () => {
  return (
    <main className={styles.page}>
      <SectionJourneyModels />
    </main>
  );
};

export default JourneyModels;
