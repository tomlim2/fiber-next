import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import SectionGameboy from "@/components/sections/fiber/gameboy-material1";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Animating Triangles | Fiber | yslim",
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
