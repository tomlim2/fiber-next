import Head from "next/head";

import LayoutDefault from "layouts/layoutDefault";
import GeometryNodes from "@/components/sections/blender/geometryNodes";

const GeometryNode = () => {
  const pageHeadData = (
    <Head>
      <title>Blender | Geometry Node | yslim</title>
      <meta name="view-transition" content="same-origin" />
      <meta name="description" content="Works about geomtery node" />
    </Head>
  );
  return (
    <div>
      {pageHeadData}
      <GeometryNodes />
    </div>
  );
};

export default GeometryNode;

GeometryNode.getLayout = function getLayout(page: React.ReactElement) {
  return <LayoutDefault>{page}</LayoutDefault>;
};
