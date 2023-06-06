import SectionP5Boid from "@/components/sections/p5/boid";
import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

export const metadata: Metadata = {
  title: "Boid | P5 | yslim",
  description: "My playground",
};

const P5Boid = () => {
  return (
    <main className="page-boid">
      <SectionP5Boid />
    </main>
  );
};

export default P5Boid;
