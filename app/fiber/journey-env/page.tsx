import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import SectionJourneyEnv from "@/components/sections/fiber/journey-env";

export const metadata: Metadata = {
  title: "Journey Environment | Fiber | yslim",
  description: "My playground",
};

const JourneyEnv = () => {
  return (
    <main className="page-journey-env">
      <SectionJourneyEnv />
    </main>
  );
};

export default JourneyEnv;
