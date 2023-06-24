import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import styles from "./page.module.scss";
import Image from "next/image";
import SectionBlender from "@/components/sections/blender/SectionBlender";

export const metadata: Metadata = {
  title: "Geometry node | Blender | yslim",
  description: "Note about geometry node",
};

const GeometryNodes = () => {
  return (
    <main className="page-geometry-node">
      <SectionBlender />
    </main>
  );
};

export default GeometryNodes;
