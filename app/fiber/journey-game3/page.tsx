import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import SectionExperience from "@/components/sections/fiber/journey-game3";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Journey game 3 | Fiber | yslim",
  description: "From shuffle the blocks",
};

const Page = () => {
  return (
    <main className={styles.page}>
      <SectionExperience />
    </main>
  );
};

export default Page;
