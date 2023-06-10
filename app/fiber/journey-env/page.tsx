import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import SectionJourneyEnv from "@/components/sections/fiber/journey-env";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Journey Environment | Fiber | yslim",
  description: "My playground",
};

const JourneyEnv = () => {
  return (
    <main className={styles.page}>
      <SectionJourneyEnv />
    </main>
  );
};

export default JourneyEnv;
