"use client";
import dynamic from "next/dynamic";
import SketchBoids from "@/components/sections/p5/boid/sketchBoids";

const WrapperP5 = dynamic(() => import("../common/wrapperP5"), { ssr: false });

const SectionP5Boid = () => {
  return <WrapperP5 sketch={SketchBoids} />;
};

export default SectionP5Boid;
