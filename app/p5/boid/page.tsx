import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

import SectionP5Boid from "@/components/sections/p5/boid";

export const metadata: Metadata = {
  title: "Boid | p5 | yslim",
  description: "My playground",
};

const P5VectorField = () => {
  return (
    <div>
      <SectionP5Boid />
    </div>
  );
};

export default P5VectorField;
