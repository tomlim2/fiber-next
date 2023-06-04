import SectionP5VectorFields from "@/components/sections/p5/vectorField";
import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

export const metadata: Metadata = {
  title: "Boid | p5 | yslim",
  description: "My playground",
};

const P5VectorField = () => {
  return (
    <div>
      <SectionP5VectorFields />
    </div>
  );
};

export default P5VectorField;
