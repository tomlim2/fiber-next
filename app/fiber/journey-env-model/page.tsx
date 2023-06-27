import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import SectionJourneyEnvModel from "@/components/sections/fiber/journey-env-model";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Journey Environment | Fiber | yslim",
  description: "My playground",
};

const JourneyEnv = () => {
  return (
    <main className={styles.page}>
      <SectionJourneyEnvModel />
    </main>
  );
};

export default JourneyEnv;
