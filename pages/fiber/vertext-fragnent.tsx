import Head from "next/head";

import LayoutDefault from "layouts/layoutDefault";
import VertexFragnent from "@/components/sections/fiber/vertexFragnent";

const ShaderPatterns = () => {
  const pageHeadData = (
    <Head>
      <title>Fiber | Vertex Fragnent | yslim</title>
      <meta name="view-transition" content="same-origin" />
      <meta name="description" content="Welcome!" />
    </Head>
  );
  return (
    <div>
      {pageHeadData}
      <VertexFragnent />
    </div>
  );
};

export default ShaderPatterns;

ShaderPatterns.getLayout = function getLayout(page: React.ReactElement) {
  return <LayoutDefault>{page}</LayoutDefault>;
};
