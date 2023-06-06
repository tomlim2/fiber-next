import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import SectionFragnentTime from "@/components/sections/fiber/fragnentTime/";

export const metadata: Metadata = {
  title: "Fragnent time | yslim",
  description: "My playground",
};

const FragnentTime = () => {
  return (
    <main className="page-fragnent-time">
      <SectionFragnentTime />
    </main>
  );
};

export default FragnentTime;
