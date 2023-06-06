import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import SectionFragnentStill from "@/components/sections/fiber/fragnentStill/";

export const metadata: Metadata = {
  title: "Fragnent still | yslim",
  description: "My playground",
};

const FragnentStill = () => {
  return (
    <main className="page-fragnent-still">
      <SectionFragnentStill />
    </main>
  );
};

export default FragnentStill;