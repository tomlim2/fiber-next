import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import SectionVertexFragnent from "@/components/sections/fiber/Vertexfragnent/";

export const metadata: Metadata = {
  title: "Fragnent time | yslim",
  description: "My playground",
};

const VertexFragnent = () => {
  return (
    <div>
      <SectionVertexFragnent />
    </div>
  );
};

export default VertexFragnent;
