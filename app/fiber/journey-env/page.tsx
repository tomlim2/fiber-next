import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import SectionVertexFragnent from "@/components/sections/fiber/vertex-fragnent";

export const metadata: Metadata = {
  title: "Journey Environment | Fiber | yslim",
  description: "My playground",
};

const JourneyEnv = () => {
  return (
    <main className="page-vertex-fragnent">
      <SectionVertexFragnent />
    </main>
  );
};

export default JourneyEnv;
