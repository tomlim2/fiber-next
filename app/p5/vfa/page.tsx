import SectionP5VectorFields from "@/components/sections/p5/vectorField";
import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

export const metadata: Metadata = {
  title: "Boid | P5 | yslim",
  description: "My playground",
};

const P5VectorField = () => {
  return (
    <main className="page-vertor-field">
      <SectionP5VectorFields />
    </main>
  );
};

export default P5VectorField;
