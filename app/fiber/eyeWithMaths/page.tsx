import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import SectionEyeWithMaths from "@/components/sections/fiber/eyeWithMaths";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Eye With Maths | Fiber | yslim",
  description: "My playground",
};

const DreiPortal = () => {
  return (
    <main className={styles.page}>
      <SectionEyeWithMaths />
    </main>
  );
};

export default DreiPortal;
