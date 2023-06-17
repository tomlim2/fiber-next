import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import SectionJourneyPhysicsGLTF from "@/components/sections/fiber/journey-physics-gltf";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Journey Physics | Fiber | yslim",
  description: "My playground",
};

const JourneyPhysicsGLTF = () => {
  return (
    <main className={styles.page}>
      <SectionJourneyPhysicsGLTF />
    </main>
  );
};

export default JourneyPhysicsGLTF;
