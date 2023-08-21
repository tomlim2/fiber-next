import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import SectionGameboy from "@/components/sections/fiber/journey-game2";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Journey game 2 | Fiber | yslim",
  description: "My playground",
};

const Page = () => {
  return (
    <main className={styles.page}>
      <SectionGameboy />
    </main>
  );
};

export default Page;
