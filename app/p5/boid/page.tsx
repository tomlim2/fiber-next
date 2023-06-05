import SectionP5Boid from "@/components/sections/p5/boid";
import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

export const metadata: Metadata = {
  title: "Boid | p5 | yslim",
  description: "My playground",
};

const P5Boid = () => {
  return (
    <div>
      <SectionP5Boid />
    </div>
  );
};

export default P5Boid;
