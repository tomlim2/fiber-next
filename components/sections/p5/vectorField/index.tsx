"use client";
import dynamic from "next/dynamic";
import SketchVectorFields from "@/components/sections/p5/vectorField/sketchVectorFields";

const WrapperP5 = dynamic(() => import("../common/wrapperP5"), { ssr: false });

const SectionP5VectorFields = () => {
  return <WrapperP5 sketch={SketchVectorFields} />;
};

export default SectionP5VectorFields;
