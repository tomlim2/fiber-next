// "use client";
import { OrbitControls, Environment } from "@react-three/drei";
import { Perf } from "r3f-perf";
import AnimatingTriMesh from "./AnimatingTriMesh";

const Experience = () => {
  return (
    <>
      <Perf position="bottom-right" />
      <OrbitControls makeDefault />
      <Environment
        background
        files={[
          "/assets/images/environmentMaps/2/px.jpg",
          "/assets/images/environmentMaps/2/nx.jpg",
          "/assets/images/environmentMaps/2/py.jpg",
          "/assets/images/environmentMaps/2/ny.jpg",
          "/assets/images/environmentMaps/2/pz.jpg",
          "/assets/images/environmentMaps/2/nz.jpg",
        ]}
      ></Environment>
      <AnimatingTriMesh />
    </>
  );
};

export default Experience;
