import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import SectionVertexFragnent from "@/components/sections/fiber/vertexFragnent";

export const metadata: Metadata = {
  title: "Fragnent time | yslim",
  description: "My playground",
};

const VertexFragnent = () => {
  return (
    <main className="page-vertex-fragnent">
      <SectionVertexFragnent />
    </main>
  );
};

export default VertexFragnent;
