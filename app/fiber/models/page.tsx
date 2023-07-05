import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import SectionModels from "@/components/sections/fiber/models";

export const metadata: Metadata = {
  title: "Models | fiber | yslim",
  description: "My playground",
};

const Modelss = () => {
  return (
    <main className="page-fragnent-time">
      <SectionModels />
    </main>
  );
};

export default Modelss;
