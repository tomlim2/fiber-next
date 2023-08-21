import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import SectionGameboy from "@/components/sections/fiber/journey-game1";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Journey Game 1 | Fiber | yslim",
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
