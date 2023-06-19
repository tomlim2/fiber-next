import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import SectionJourneyPostprocess from "@/components/sections/fiber/journey-postprocess";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Journey Postprocess | Fiber | yslim",
  description: "My playground",
};

const JourneyPostprocess = () => {
  return (
    <main className={styles.page}>
      <SectionJourneyPostprocess />
    </main>
  );
};

export default JourneyPostprocess;
