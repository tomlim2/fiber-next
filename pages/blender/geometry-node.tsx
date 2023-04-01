import Head from "next/head";

import LayoutDefault from "layouts/layoutDefault";
import MeshoNShader from "@/components/pages/fiber/shaderPatterns";

const GeometryNode = () => {
  const pageHeadData = (
    <Head>
      <title>Blender | Geometry Node | yslim</title>
      <meta name="view-transition" content="same-origin" />
      <meta name="description" content="Works about Geomtery node" />
    </Head>
  );
  return (
    <div>
      {pageHeadData}
      <MeshoNShader />
    </div>
  );
};

export default GeometryNode;

GeometryNode.getLayout = function getLayout(page: React.ReactElement) {
  return <LayoutDefault>{page}</LayoutDefault>;
};
