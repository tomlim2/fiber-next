import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import SectionHome from "@/components/sections/home/SectionHome";
import styles from "./page.module.scss";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home | yslim",
  description: "My playground",
};

const PageHome = () => {
  return (
    <main className={styles.main}>
      <SectionHome />
    </main>
  );
};

export default PageHome;
