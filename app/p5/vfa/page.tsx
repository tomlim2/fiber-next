import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

import SectionP5VectorFields from "@/components/sections/p5/vectorField";

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
